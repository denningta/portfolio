import NavItem, { NavItemProps } from "./Navitem"
import { IoMdClose } from "react-icons/io"
import { GiAstronautHelmet } from "react-icons/gi"

export interface NavModalProps {
  navItems: NavItemProps[]
  onClose?: () => void
  darkModeButton: JSX.Element
}

const NavModal = ({ navItems, onClose = () => { }, darkModeButton }: NavModalProps) => {
  return (
    <div
      className={`
        z-50 fixed top-[50px] 
        left-0 right-0 bottom-0 
        flex justify-center items-center 
        dark:bg-black dark:bg-opacity-70 
      `}
      onClick={onClose}
    >
      <div
        className={`
          relative w-3/5 h-fit 
          border border-neutral-200 dark:border dark:border-neutral-800 
          backdrop-blur drop-shadow rounded-lg 
          px-5 py-10 flex flex-col items-center justify-center
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl my-5">
          <NavItem title="Home" href="/" icon={GiAstronautHelmet} />
        </div>
        {navItems && navItems.map((navItem, i) =>
          <div key={`navItem-${i}`} className="my-5 text-xl">
            <NavItem {...navItem} />
          </div>
        )}
        <div className="my-5">
          {darkModeButton}
        </div>
        <button className="absolute top-5 right-5 opacity-30" onClick={onClose}>
          <IoMdClose size={30} />
        </button>
      </div>
    </div>
  )

}

export default NavModal
