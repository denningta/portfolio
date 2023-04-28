import { SankeyLinkCustom, SankeyNodeCustom } from "@/sanity-queries/getSankeyData"
import { LinearGradient } from "@visx/gradient"
import { SankeyLink, sankeyLinkHorizontal, SankeyNode } from "d3-sankey"
import { url } from "inspector"

export interface SankeyLinkComponentProps {
  link: SankeyLink<SankeyNodeCustom, SankeyLinkCustom>
  fill?: string | undefined
  opacity?: string | number | undefined
  onHoverChange?: (link: SankeyLink<SankeyNodeCustom, SankeyLinkCustom> | undefined) => void
}

const SankeyLinkComponent = ({
  link,
  fill,
  opacity,
  onHoverChange = () => { }
}: SankeyLinkComponentProps) => {

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

  const handleMouseEnterLink = () => {
    onHoverChange(link)
  }

  const handleMouseLeaveLink = () => {
    onHoverChange(undefined)
  }

  return (
    <>
      <LinearGradient
        id={`${link.index}`}
        from={link.sourceColor && link.sourceColor.hex}
        to={link.targetColor && link.targetColor.hex}
        vertical={false}
      />
      <path
        d={path(link) ?? undefined}
        stroke={`url(#${link.index})`}
        strokeWidth={Math.max(1, link.width ?? 0)}
        fill="none"
        opacity={opacity}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
      />
    </>
  )
}

export default SankeyLinkComponent
