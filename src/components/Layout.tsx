import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import Footer from "./Footer";
import NavBar from "./Navbar";

export interface LayoutProps {
    children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
    const navBarHeight = 50
    const [darkMode, setDarkMode] = useState(false) 

    const handleDarkModeChange = () => {
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
                className="fixed top-0 left-0 w-full flex flex-col justify-center items-center" 
            >
                <NavBar height={navBarHeight} darkModeButton={darkModeButton} />
                <div 
                    className={`
                        w-full h-[2px] 
                        opacity-50
                        bg-neutral-300
                        dark:bg-black
                        transition ease-in-out
                        drop-shadow-sm
                    `}
                ></div>
            </motion.div>
            <div className="max-w-xl mx-auto" style={{ marginTop: navBarHeight + 10 }}>
                {Array.isArray(children) && children.map((child, index) => 
                    <motion.div
                        key={`child-${index}`}
                        className="my-10"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                    >
                        {child}
                    </motion.div>
                )}
            </div> 
            <motion.div
                initial={{ opacity : 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + (Array.isArray(children) ? children.length * 0.1 : 0.1) }}
            >
                <Footer />
            </motion.div>
        </div>
    )
}


