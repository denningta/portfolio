import { tailwindColors } from "@/lib/tailwind-config"
import { Group } from "@visx/group"
import { Text } from "@visx/text"
import { SankeyNode } from "d3-sankey"
import { useContext, useState } from "react"
import { DarkModeContext } from "../DarkModeContext"
import { SankeyLinkCustom, SankeyNodeCustom } from "./Sankey"

export interface SankeyNodeComponentProps {
  node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom>
  containerWidth: number
  onHoverChange?: (node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom> | undefined) => void
  fill?: string
  opacity?: string | number | undefined
}


const SankeyNodeComponent = ({
  node,
  containerWidth,
  onHoverChange = () => { },
  fill,
  opacity
}: SankeyNodeComponentProps) => {
  const darkMode = useContext(DarkModeContext)

  const nodeWidth = (node.x1 ?? 0) - (node.x0 ?? 0)
  const nodeHeight = (node.y1 ?? 0) - (node.y0 ?? 0)

  const handleMouseEnter = () => {
    onHoverChange(node)
  }

  const handleMouseLeave = () => {
    onHoverChange(undefined)
  }

  return (
    <>
      <Group top={node.y0} left={node.x0}>
        <rect
          width={nodeWidth}
          height={nodeHeight}
          fill={fill}
          opacity={opacity}
          r={4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Text
          x={(node.x0 ?? 0) > 1 ? '-5' : '18'}
          y={nodeHeight / 2}
          verticalAnchor="middle"
          textAnchor={(node.x0 ?? 0) > 1 ? 'end' : 'start'}
          fill={fill}
          opacity={opacity}
          width={(node.x0 ?? 0) > (containerWidth - 50) ? 300 : 130}
        >
          {node.name}
        </Text>
      </Group>
    </>
  )
}

export default SankeyNodeComponent
