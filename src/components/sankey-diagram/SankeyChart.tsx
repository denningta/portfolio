import Sankey, { SankeyData } from "./Sankey"
import { Group } from "@visx/group"
import SankeyLinkComponent from "./SankeyLink"
import SankeyNodeComponent from "./SankeyNodeComponent"
import useSankeyHover from "@/hooks/useSankeyHover"
import { defaultStyles, TooltipWithBounds, useTooltip, useTooltipInPortal } from "@visx/tooltip"
import { useCallback, useContext } from "react"
import NodeTooltip from "./NodeTooltip"
import { DarkModeContext } from "../DarkModeContext"
import { tailwindColors } from "@/lib/tailwind-config"
import Heading from "../Heading"

export interface SankeyChartProps {
  data: SankeyData | undefined
  width: number
  height: number
  margin?: { top: number, left: number, right: number, bottom: number }
}



const SankeyChart = ({
  data,
  width,
  height,
  margin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}: SankeyChartProps) => {
  const darkMode = useContext(DarkModeContext)

  const nodeStyle = {
    default: {
      fill: darkMode ? 'white' : 'black',
      opacity: 0.7
    },
    hover: {
      fill: darkMode ? 'white' : 'black',
      opacity: 1
    }
  }

  const linkStyle = {
    default: {
      fill: darkMode ? 'white' : 'black',
      opacity: 0.1
    },
    hover: {
      fill: darkMode ? tailwindColors.blue['500'] : 'lightblue',
      opacity: 0.5
    }
  }

  const {
    handleNodeHoverChange,
    handleLinkHoverChange,
    handleLinkStyle,
    handleNodeStyle,
    activeNode
  } = useSankeyHover({
    nodeStyle: nodeStyle,
    linkStyle: linkStyle
  })


  const {
    showTooltip,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<string>({
    // initial tooltip state
    tooltipOpen: true,
    tooltipLeft: width / 3,
    tooltipTop: height / 3,
    tooltipData: 'Move me with your mouse or finger',
  });

  const { containerRef, containerBounds } = useTooltipInPortal({
    scroll: true,
    detectBounds: true,
  });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      // coordinates should be relative to the container in which Tooltip is rendered
      const containerX = ('clientX' in event ? event.clientX : 0) - containerBounds.left;
      const containerY = ('clientY' in event ? event.clientY : 0) - containerBounds.top;
      showTooltip({
        tooltipLeft: containerX,
        tooltipTop: containerY,
        tooltipData: 'This is the tooltip'
      });
    },
    [showTooltip, containerBounds],
  );


  return (
    <div className="relative select-none" ref={containerRef} onPointerMove={handlePointerMove}>
      <div className="grid grid-cols-3 w-full">
        <Heading>Work</Heading>
        <Heading className="flex justify-center">Projects</Heading>
        <Heading className="flex justify-end">Skills</Heading>
      </div>
      {activeNode &&
        <TooltipWithBounds
          key={Math.random()}
          left={tooltipLeft}
          top={tooltipTop}
          style={{ ...defaultStyles, padding: 0, background: 'none', boxShadow: 'none' }}
        >
          <NodeTooltip node={activeNode} />
        </TooltipWithBounds>
      }

      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        {data && <Sankey
          top={margin.top}
          left={margin.left}
          data={data}
          size={[width, height]}
          nodeWidth={15}
          nodePadding={10}
          extent={[
            [1, 1],
            [width - 1, height - 6]
          ]}
          nodeId={(d) => d.id}
          nodeSort={() => undefined}
        >
          {(data) => (
            <Group>
              {data.links.map((link, i) =>
                <SankeyLinkComponent
                  key={`link-${i}`}
                  link={link}
                  onHoverChange={handleLinkHoverChange}
                  fill={handleLinkStyle(link).fill}
                  opacity={handleLinkStyle(link).opacity}
                />
              )}

              {data.nodes.map((node, i) =>
                <SankeyNodeComponent
                  key={`node-${i}`}
                  node={node}
                  containerWidth={width}
                  onHoverChange={handleNodeHoverChange}
                  fill={handleNodeStyle(node).fill}
                  opacity={handleNodeStyle(node).opacity}
                />
              )}
            </Group>
          )}
        </Sankey>}
      </svg>
    </div>
  )
}

export default SankeyChart
