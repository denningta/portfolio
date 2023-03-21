import Sankey, { SankeyData } from "./Sankey"
import { Group } from "@visx/group"
import { Text } from "@visx/text"
import { sankeyLinkHorizontal } from "d3-sankey"
import { useContext, useState } from "react"
import { DarkModeContext } from "../DarkModeContext"
import { tailwindColors } from "../../lib/tailwind-config"
import SankeyLinkComponent from "./SankeyLink"

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

  const path = sankeyLinkHorizontal()
    .source((d) => {
      if (typeof d.source === 'object')
        return [d.source.x1 ?? 0, d.y0 ?? 0]
      return [0, 0]
    })
    .target((d) => {
      if (typeof d.target === 'object')
        return [d.target.x0 ?? 0, d.y1 ?? 0]
      return [0, 0]
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
        nodeSort={(a, b) => undefined}
      >
        {(data) => (
          <Group>
            {data.nodes.map((node, i) => {
              const nodeHeight = (node.y1 ?? 0) - (node.y0 ?? 0)
              const nodeWidth = (node.x1 ?? 0) - (node.x0 ?? 0)
              return (
                <Group top={node.y0} left={node.x0} key={`node-${i}`}>
                  <rect
                    id={`rect-${i}`}
                    width={nodeWidth}
                    height={nodeHeight}
                    fill={darkMode ? tailwindColors.neutral['100'] : tailwindColors.neutral['800']}
                    r={4}
                  />
                  <Text
                    x={(node.x0 ?? 0) > 1 ? '-5' : '18'}
                    y={nodeHeight / 2}
                    verticalAnchor="middle"
                    textAnchor={(node.x0 ?? 0) > 1 ? 'end' : 'start'}
                    fill={darkMode ? 'white' : 'black'}
                    width={(node.x0 ?? 0) > (width - 50) ? 300 : 130}
                  >
                    {node.name}
                  </Text>
                </Group>
              )
            })}

            <Group>
              {data.links.map((link, i) =>
                <SankeyLinkComponent
                  key={`link-${i}`}
                  link={link}
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
