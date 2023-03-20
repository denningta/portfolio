import Sankey, { SankeyData, SankeyLink, SankeyNode } from "./Sankey"
import { Group } from "@visx/group"
import { Text } from "@visx/text"
import { sankeyLinkHorizontal } from "d3-sankey"
import { useContext } from "react"
import { DarkModeContext } from "./DarkModeContext"
import { tailwindColors } from "../lib/tailwind-config"

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
                    x={(node.x1 ?? 0) > (width - 50) ? '-100' : '18'}
                    y={nodeHeight / 2}
                    verticalAnchor="middle"
                    fill={darkMode ? 'white' : 'black'}
                  >
                    {node.name}
                  </Text>
                </Group>
              )
            })}

            <Group>
              {data.links.map((link, i) => {

                return (
                  <path
                    key={`link-${i}`}
                    d={path(link) ?? undefined}
                    stroke={darkMode ? tailwindColors.neutral['100'] : tailwindColors.neutral['900']}
                    strokeWidth={Math.max(1, link.width ?? 0)}
                    fill="none"
                    opacity={0.15}
                  />
                )
              })}
            </Group>

          </Group>
        )}
      </Sankey>}
    </svg>
  )
}

export default SankeyChart
