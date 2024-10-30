import React from 'react'
import { Icon } from '@components/icon/Icon.tsx'
import styles from '@styles/modules/navigation-links.module.css'
import type { IconSize } from '@components/icon/IconSizeMap.ts'

interface NavLinkProps {
    href: string
    iconName: string
    iconSize?: IconSize
    iconColor?: string
    additionalClass?: string
    label: string
}

export const NavLink: React.FC<NavLinkProps> = ({
    href,
    iconName,
    iconSize = 'sm',
    iconColor = 'var(--primary-2)',
    additionalClass = '',
    label,
}) => {
    const className = `${styles.navlink} ${additionalClass}`.trim()

    return (
        <a className={className} href={href}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
            <span>{label}</span>
        </a>
    )
}
