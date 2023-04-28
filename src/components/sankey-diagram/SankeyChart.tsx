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
import { ParentSize } from "@visx/responsive"
import useCustomTooltip from "@/hooks/useCustomTooltip"
import { useMediaQuery } from "react-responsive"

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
      textColor: darkMode ? 'white' : 'black',
      opacity: 0.7
    },
    hover: {
      fill: darkMode ? 'white' : 'black',
      textColor: darkMode ? tailwindColors.neutral['100'] : tailwindColors.blue['500'],
      opacity: 1
    }
  }

  const linkStyle = {
    default: {
      fill: darkMode ? 'white' : 'black',
      opacity: 0.2
    },
    hover: {
      fill: darkMode ? tailwindColors.blue['500'] : 'lightblue',
      opacity: 1
    }
  }

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

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
    tooltipTop,
    tooltipLeft,
    containerRef,
    handlePointerMove
  } = useCustomTooltip({ container: { width: width, height: height } })


  return (
    <>
      <div className="grid grid-cols-3 w-full">
        <Heading>Work</Heading>
        <Heading className="flex justify-center">Projects</Heading>
        <Heading className="flex justify-end">Skills</Heading>
      </div>




      <div className="relative select-none h-[600px]" ref={containerRef} onPointerMove={handlePointerMove}>

        {activeNode && activeNode.y0 &&
          <div
            className="absolute left-1/2 -translate-x-1/2 m-0 text-black z-50 px-3 py-1 text-xs w-[300px] mt-[30px]"
            style={{
              bottom: activeNode.y0 < height / 3 ? 30 : 'auto',
            }}
          >
            <NodeTooltip node={activeNode} />
          </div>
        }

        <ParentSize debounceTime={10}>
          {(parent) => {
            if (!parent) return
            return (
              <svg
                width={parent.width + margin.left + margin.right}
                height={parent.height + margin.top + margin.bottom}
              >
                {data &&
                  <Sankey
                    top={margin.top}
                    left={margin.left}
                    data={data}
                    size={[parent.width, parent.height]}
                    nodeWidth={15}
                    nodePadding={10}
                    extent={[
                      [1, 1],
                      [parent.width - 1, parent.height - 6]
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
                            containerWidth={parent.width}
                            onHoverChange={handleNodeHoverChange}
                            fill={handleNodeStyle(node).fill}
                            textColor={handleNodeStyle(node).textColor}
                            opacity={handleNodeStyle(node).opacity}
                          />
                        )}
                      </Group>
                    )}
                  </Sankey>
                }
              </svg>
            )
          }}
        </ParentSize>
      </div>
    </>
  )
}

export default SankeyChart
