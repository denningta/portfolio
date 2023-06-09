import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import DarkModeButton from "./DarkModeButton";
import { DarkModeContext } from "./DarkModeContext";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { NavItemProps } from "./Navitem";
import NavMenu from "./NavMenu";
import NavModal from "./NavModal";

export interface LayoutProps {
  children: React.ReactNode
  animateChildren?: boolean
}

export default function Layout({ children, animateChildren = true }: LayoutProps) {
  const navBarHeight = 50
  const [isMenuOpen, toggleMenu] = useCycle(false, true);

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  const handleDarkModeChange = () => {
    localStorage.darkMode = !darkMode
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.getElementsByTagName('html')[0].className = darkMode
      ? 'dark bg-neutral-900 text-white'
      : 'bg-neutral-100'
  }, [darkMode])

  const darkModeButton = <DarkModeButton darkMode={darkMode} onDarkModeChanged={handleDarkModeChange} />

  const navItems: NavItemProps[] = [
    { title: 'Projects', href: '/projects', },
    { title: 'Writing', href: '/writing', },
    { title: 'Resume', href: '#' },
    { title: 'Github', href: '#', icon: FaGithub },
  ]


  return (
    <div className="flex flex-col mx-auto px-4 sm:px-0 min-h-screen">

      <DarkModeContext.Provider value={darkMode}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-50 fixed top-0 left-0 w-full flex flex-col justify-center items-center"
        >
          <NavBar
            isMenuOpen={isMenuOpen}
            onMenuToggle={toggleMenu}
            navItems={navItems}
            height={navBarHeight}
            darkModeButton={darkModeButton}
          />
        </motion.div>

        <motion.nav
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
        >
          <NavMenu
            navItems={navItems}
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            darkModeButton={darkModeButton}
          />
        </motion.nav>

        <div className="max-w-xl w-full mx-auto" style={{ paddingTop: navBarHeight + 30 }}>
          {Array.isArray(children) && children.map((child, index) =>
            animateChildren ?
              <motion.div
                key={`child-${index}`}
                className="my-10"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                {child}
              </motion.div>
              :
              <div key={`child-${index}`}>{child}</div>
          )}
        </div>
        <div className="grow" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + (Array.isArray(children) ? children.length * 0.1 : 0.1) }}
        >
          <Footer />
        </motion.div>

      </DarkModeContext.Provider>
    </div>

  )
}


