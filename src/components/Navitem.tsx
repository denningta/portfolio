import Link from "next/link"
import { IconType } from "react-icons"

export interface NavItemProps {
    title: string
    href: string
    icon?: IconType 
    className?: string
}

const NavItem = ({ title, href, icon, className }: NavItemProps) => {
    return (
        <Link href={href} className={`flex items-center ${className}`}>
            {icon &&
                <div className="mr-1">
                    { icon({}) }   
                </div>
            }
            <div>
                { title }
            </div>
        </Link>
    )
}

export default NavItem
