import { GiAstronautHelmet } from 'react-icons/gi'
import NavItem, { NavItemProps } from './Navitem'
import { FaGithub } from 'react-icons/fa'

export interface NavBarProps {
    darkModeButton: JSX.Element
    height: number
}

const NavBar = ({ darkModeButton, height }: NavBarProps) => {
    const name = 'Tim Denning'
    const navItems: NavItemProps[] = [
        { title: 'Projects', href: '#', },
        { title: 'Writing', href: '#', },
        { title: 'Resume', href: '#' },
        { title: 'Github', href: '#', icon: FaGithub },
    ]  

    return (
        <div 
            className={`
                max-w-3xl flex items-center w-full py-2 
                bg-neutral-100 
                dark:bg-neutral-900 
                backdrop-blur-sm transition ease-in-out
            `}
            style={{ height: height }}
        >
            <div className="flex items-center mx-2">
                <div className="flex items-center mx-2">
                   <GiAstronautHelmet size={20} /> 
                </div>
               <div className="font-semibold text-xl">
                  { name } 
               </div>
            </div>
            <div className="grow flex mx-6">
                {navItems.map((navItemProps, i) => 
                   <NavItem key={`navItem-${i}`} className="mr-3"  {...navItemProps} /> 
                )}
            </div>
            <div className="">
                { darkModeButton }
            </div>

        </div>
    )
}

export default NavBar
