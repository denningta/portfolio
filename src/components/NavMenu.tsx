import { motion } from "framer-motion"
import NavItem, { NavItemProps } from "./Navitem"

export interface NavMenuProps {
  navItems: NavItemProps[]
  isOpen: boolean
  onClose?: () => void
  darkModeButton: JSX.Element
}

const NavMenu = ({ navItems, onClose, darkModeButton }: NavMenuProps) => {

  return (
    <motion.div
      className="z-50 fixed top-[50px] left-0 w-full h-full flex justify-end"
      variants={{
        open: {
          display: 'flex'
        },
        closed: {
          display: 'none',
          transition: { delay: 0.2 }
        }
      }}
    >
      <motion.div
        className="z-40 fixed top-[50px] left-0 w-full h-full bg-black bg-opacity-30 backdrop-blur text-xl"
        onClick={onClose}
        variants={{
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        }}
        transition={{ duration: 0.2 }}

      />
      <motion.div
        className="z-50 fixed flex flex-col h-full items-center p-5 bg-neutral-100 dark:bg-neutral-900 w-2/3"
        variants={{
          open: {
            x: 0
          },
          closed: {
            x: 500
          }
        }}
        transition={{ duration: 0.2 }}
      >

        <div className="mt-10 mb-10">
          <NavItem title="Home" href="/" />
        </div>


        {navItems.map((navItem, i) =>

          <div key={`navItem-${i}`} className="mb-10">
            <NavItem {...navItem} />

          </div>
        )}
        {darkModeButton}
      </motion.div>
    </motion.div>
  )
}

export default NavMenu
