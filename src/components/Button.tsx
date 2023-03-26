import { useContext, useState } from "react"
import { IconType } from "react-icons"
import { DarkModeContext } from "./DarkModeContext"

interface ButtonProps {
  title: string
  icon?: IconType
}

const Button = ({ title, icon }: ButtonProps) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      className={`
        w-fit rounded bg-gradient-to-b 
        from-rose-300 via-rose-600 to-red-900
      `}
    >
      <button
        className={`
          z-1
          m-[1px]
          px-3 py-1 rounded
          transition ease-in-out
          text-white
          bg-gradient-to-bl
          from-rose-600 to-red-700
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon &&
          <div>icon</div>
        }
        <div>{title}</div>
      </button>
    </div>
  )
}

export default Button
