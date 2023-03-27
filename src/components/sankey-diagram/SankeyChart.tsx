import Sankey, { SankeyData, SankeyLinkCustom, SankeyNodeCustom } from "./Sankey"
import { Group } from "@visx/group"
import { SankeyLink, SankeyNode } from "d3-sankey"
import { useState } from "react"
import SankeyLinkComponent, { SankeyLinkComponentProps } from "./SankeyLink"
import SankeyNodeComponent, { SankeyNodeComponentProps } from "./SankeyNodeComponent"
import useSankeyHover from "@/hooks/useSankeyHover"

export interface SankeyChartProps {
  data: SankeyData | undefined
  width: number
  height: number
  margin?: { top: number, left: number, right: number, bottom: number }
}

const nodeStyle = {
  default: {
    fill: 'black',
    opacity: 0.7
  },
  hover: {
    fill: 'black',
    opacity: 1
  }
}

const linkStyle = {
  default: {
    fill: 'black',
    opacity: 0.1
  },
  hover: {
    fill: 'black',
    opacity: 0.5
  }
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
  const {
    handleNodeHoverChange,
    handleLinkHoverChange,
    handleLinkStyle,
    handleNodeStyle,
  } = useSankeyHover({
    nodeStyle: nodeStyle,
    linkStyle: linkStyle
  })

  return (
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
            </Group>

          </Group>
        )}
      </Sankey>}
    </svg>
  )
}

export default SankeyChart
