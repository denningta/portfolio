import Sankey, { SankeyData, SankeyLinkCustom, SankeyNodeCustom } from "./Sankey"
import { Group } from "@visx/group"
import { SankeyLink, SankeyNode } from "d3-sankey"
import { useState } from "react"
import SankeyLinkComponent, { SankeyLinkComponentProps } from "./SankeyLink"
import SankeyNodeComponent, { SankeyNodeComponentProps } from "./SankeyNodeComponent"

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
  const [activeNodeIds, setActiveNodeIds] = useState<string[] | undefined>(undefined)
  const [activeLinkIds, setActiveLinkIds] = useState<number[] | undefined>(undefined)

  const handleNodeHoverChange: SankeyNodeComponentProps['onHoverChange'] = (node) => {
    console.log(node)
    if (!node) {
      setActiveNodeIds(undefined)
      setActiveLinkIds(undefined)
      return
    }

    const nodeIds = []
    const linkIds = []

    if (node.sourceLinks) {
      nodeIds.push(
        node.id,
        ...node.sourceLinks.map((link: any) => link.target.id as string),
      )
      linkIds.push(
        ...node.sourceLinks.map((link: any) => link.index)
      )
    }

    if (node.targetLinks) {
      nodeIds.push(
        node.id,
        ...node.targetLinks.map((link: any) => link.source.id as string)
      )
      linkIds.push(
        ...node.targetLinks.map((link: any) => link.index as string)
      )
    }

    setActiveNodeIds(nodeIds)
    setActiveLinkIds(linkIds)
  }

  const handleNodeOpacity = (node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom>) => {
    if (!activeNodeIds) return 0.7
    if (!activeNodeIds.length) return 0.7

    if (activeNodeIds.includes(node.id)) return 1

    return 0.7
  }

  const handleNodeColor = (node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom>) => {
    if (!activeNodeIds) return
    if (!activeNodeIds.length) return

    if (activeNodeIds.includes(node.id)) {
      return 'black'
    }

    return
  }

  const handleLinkHoverChange: SankeyLinkComponentProps['onHoverChange'] = (link) => {

    if (!link) {
      setActiveNodeIds(undefined)
      setActiveLinkIds(undefined)
      return
    }

    setActiveNodeIds([
      link.source.id,
      link.target.id
    ])

    setActiveLinkIds(link.index !== undefined ? [link.index] : undefined)
  }

  const handleLinkColor = (link: SankeyLink<SankeyNodeCustom, SankeyLinkCustom>) => {

    return 'black'

  }

  const handleLinkOpacity = (link: SankeyLink<SankeyNodeCustom, SankeyLinkCustom>) => {
    if (!activeLinkIds) return 0.12
    if (link.index === undefined) return 0.12
    if (activeLinkIds.includes(link.index)) return 0.25
    return 0.12
  }

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
                fill={handleNodeColor(node)}
                opacity={handleNodeOpacity(node)}
              />
            )}

            <Group>
              {data.links.map((link, i) =>
                <SankeyLinkComponent
                  key={`link-${i}`}
                  link={link}
                  onHoverChange={handleLinkHoverChange}
                  fill={handleLinkColor(link)}
                  opacity={handleLinkOpacity(link)}
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
