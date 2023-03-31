import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import { DarkModeContext } from "./DarkModeContext";
import Footer from "./Footer";
import NavBar from "./Navbar";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  animateChildren?: boolean
}

export default function Layout({ children, animateChildren = true }: LayoutProps) {
  const navBarHeight = 50
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

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-50 fixed top-0 left-0 w-full flex flex-col justify-center items-center"
      >
        <NavBar height={navBarHeight} darkModeButton={darkModeButton} />
      </motion.div>
      <div className="max-w-xl mx-auto" style={{ marginTop: navBarHeight + 30 }}>
        <DarkModeContext.Provider value={darkMode}>
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
              <div>{child}</div>
          )}
        </DarkModeContext.Provider>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 + (Array.isArray(children) ? children.length * 0.1 : 0.1) }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}


