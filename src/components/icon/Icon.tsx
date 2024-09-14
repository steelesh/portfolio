import { type IconSize, IconSizeMap } from '@components/icon/IconSizeMap.ts'
import { IconPaths } from '@components/icon/IconPaths.tsx'
import React from 'react'

interface IconProps {
    name: keyof typeof IconPaths
    size?: IconSize
    color?: string
}

export const Icon: React.FC<IconProps> = ({
    name,
    size = 'md',
    color = 'currentColor',
}) => {
    const iconPath = IconPaths[name](color)
    const iconSize = IconSizeMap[size]

    return iconPath ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            style={{ cursor: 'pointer' }}
        >
            {iconPath}
        </svg>
    ) : null
}
