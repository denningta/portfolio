import { IconType } from 'react-icons'
import * as SiIcons from 'react-icons/si'


export const SiIcon = (icon: keyof IconType) => SiIcons[icon]
