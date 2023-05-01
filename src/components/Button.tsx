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
        m-[1px]
        w-fit rounded-full 
        bg-gradient-to-b from-blue-300 to-blue-800 
        dark:bg-gradient-to-b dark:from-blue-400 dark:to-blue-800
        drop-shadow
      `}
    >
      <button
        className={`
          z-1
          m-[1px]
          px-4 py-1 rounded-full
          transition ease-in-out
          text-white
          bg-blue-500
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
