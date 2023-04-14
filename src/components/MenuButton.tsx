import { motion } from "framer-motion"
import { useContext } from "react"
import { DarkModeContext } from "./DarkModeContext"

export interface MenuButtonProps {
  toggle: () => void
  width?: number
  height?: number
}

const Path = (props: React.ComponentProps<typeof motion.path>) => {
  const darkMode = useContext(DarkModeContext)
  console.log(darkMode)

  return (
    <motion.path
      fill="transparent"
      strokeWidth={3}
      stroke={darkMode ? "white" : "black"}
      strokeLinecap="round"
      {...props}
    />
  )
}

const MenuButton = ({ toggle, width = 35, height = 35 }: MenuButtonProps) => {


  return (
    <>
      <button
        onClick={toggle}
        style={{ width: width, height: height }}
        type="button"
      >
        <svg width={width} height={height}>
          <Path variants={{
            closed: { d: `M 5 ${height * 1 / 4} L ${width - 5} ${height * 1 / 4}` },
            open: { d: `M 10 ${height - 10} L ${width - 10} 10` }
          }} />
          <Path
            d={`M 5 ${height * 1 / 2} L ${width - 5} ${height * 1 / 2}`}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <Path variants={{
            closed: { d: `M 5 ${height * 3 / 4} L ${width - 5} ${height * 3 / 4}` },
            open: { d: `M 10 10 L ${width - 10} ${height - 10}` }
          }} />
        </svg>
      </button>
    </>
  )

}

export default MenuButton
