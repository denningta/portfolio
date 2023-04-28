import { SankeyLinkCustom, SankeyNodeCustom } from "@/sanity-queries/getSankeyData"
import { Group } from "@visx/group"
import { Text } from "@visx/text"
import { SankeyNode } from "d3-sankey"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"

export interface SankeyNodeComponentProps {
  node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom>
  containerWidth: number
  onHoverChange?: (node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom> | undefined) => void
  fill?: string
  textColor?: string
  opacity?: string | number | undefined
}

const SankeyNodeComponent = ({
  node,
  containerWidth,
  onHoverChange = () => { },
  fill,
  textColor,
  opacity
}: SankeyNodeComponentProps) => {

  const nodeWidth = (node.x1 ?? 0) - (node.x0 ?? 0)
  const nodeHeight = (node.y1 ?? 0) - (node.y0 ?? 0)

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  const handleMouseEnter = () => {
    onHoverChange(node)
  }

  const handleMouseLeave = () => {
    onHoverChange(undefined)
  }

  const textX = (node.x0 ?? 0) > 1 ? '-5' : '18'
  const textY = nodeHeight / 2
  const textWidth = (node.x0 ?? 0) > (containerWidth - 50) ? 300 : 130

  return (
    <>
      <Group top={node.y0} left={node.x0}>
        {nodeWidth > 0 && nodeHeight > 0 &&
          <rect
            width={nodeWidth}
            height={nodeHeight}
            fill={node.color ? node.color.hex : fill}
            opacity={opacity}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        }
        <Text
          x={textX}
          y={textY}
          verticalAnchor="middle"
          textAnchor={(node.x0 ?? 0) > 1 ? 'end' : 'start'}
          fontSize={isMobile ? 10 : 14}
          fill={textColor}
          opacity={opacity}
          width={textWidth}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {node.name}
        </Text>
      </Group>
    </>
  )
}

export default SankeyNodeComponent
