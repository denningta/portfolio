import { tailwindColors } from "@/lib/tailwind-config"
import { SankeyLink, sankeyLinkHorizontal } from "d3-sankey"
import { useContext, useState } from "react"
import { DarkModeContext } from "../DarkModeContext"
import { SankeyLinkCustom, SankeyNodeCustom } from "./Sankey"

export interface LinkProps {
  link: SankeyLink<SankeyNodeCustom, SankeyLinkCustom>
}

const SankeyLinkComponent = ({ link }: LinkProps) => {
  const darkMode = useContext(DarkModeContext)
  const [linkHover, setLinkHover] = useState(false)

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
    setLinkHover(true)
  }

  const handleMouseLeaveLink = () => {
    setLinkHover(false)
  }

  const handleLinkColor = () => {
    if (!linkHover) {
      return darkMode ? tailwindColors.neutral['100'] : tailwindColors.neutral['900']
    }

    return tailwindColors.rose['500']
  }


  return (
    <>
      <path
        d={path(link) ?? undefined}
        stroke={handleLinkColor()}
        strokeWidth={Math.max(1, link.width ?? 0)}
        fill="none"
        opacity={0.15}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
      />
    </>
  )
}

export default SankeyLinkComponent
