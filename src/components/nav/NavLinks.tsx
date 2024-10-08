import React from 'react'
import { NavLink } from '@components/nav/NavLink'
import { SubNavLinks } from '@components/nav/SubNavLinks'
import styles from '@styles/modules/navigation-links.module.css'

export const NavLinks: React.FC = () => {
    const currentPath = window.location.pathname

    return (
        <>
            <NavLink
                href="/"
                iconName="home"
                iconSize="md"
                iconColor="var(--primary-1)"
                label="Home"
                additionalClass={currentPath === '/' ? styles.active : ''}
            />
            <NavLink
                href="/work"
                iconName="work"
                iconSize="md"
                iconColor="var(--primary-1)"
                label="Work"
                additionalClass={
                    currentPath.startsWith('/work') ? styles.active : ''
                }
            />
            <NavLink
                href="/notes"
                iconName="notes"
                iconSize="md"
                iconColor="var(--primary-1)"
                label="Notes"
                additionalClass={
                    currentPath.startsWith('/notes') ? styles.active : ''
                }
            />
            <NavLink
                href="/cv"
                iconName="cv"
                iconSize="md"
                iconColor="var(--primary-1)"
                label="View CV"
                additionalClass={currentPath === '/cv' ? styles.active : ''}
            />
            <SubNavLinks />
        </>
    )
}
