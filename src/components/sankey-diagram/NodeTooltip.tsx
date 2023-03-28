import { SankeyLinkCustom, SankeyNodeCustom } from "@/sanity-queries/getSankeyData"
import { SankeyNode } from "d3-sankey"
import { CSSProperties } from "react"
import { SiIcon } from "../../../public/sanity-icon-picker"

interface NodeTooltipProps {
  node: SankeyNode<SankeyNodeCustom, SankeyLinkCustom>
}

const formatDate = (input: string) => {
  return new Date(input).toLocaleDateString('en-us', { month: 'long', year: 'numeric' }).toString()
}

const NodeTooltip = ({ node }: NodeTooltipProps) => {

  return (
    <div
      className={`px-2 py-1 max-w-[400px] rounded text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 dark:bg-opacity-70 bg-opacity-70 backdrop-blur drop-shadow`}
    >
      <div className="flex">
        {node.icon && <div>{SiIcon(node.icon)}</div>}
        <div className="text-lg font-bold">{node.name}</div>
      </div>
      {node.start && node.end && <div className="mt-2">{formatDate(node.start)} to {formatDate(node.end)}</div>}
      {node.shortDesc && <div className="mt-2">{node.shortDesc}</div>}
    </div>
  )

}

export default NodeTooltip
