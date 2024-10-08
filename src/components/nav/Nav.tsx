import styles from '@styles/modules/navigation.module.css'
import { BodyBlurOverlay } from '@components/overlay/Overlay.tsx'
import { MenuToggle } from '@components/nav/MenuToggle.tsx'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { SearchToggle } from '@components/nav/SearchToggle.tsx'
import { Icon } from '@components/icon/Icon.tsx'

export const Nav = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollUpDistance, setScrollUpDistance] = useState(0)
    const [scrollDownDistance, setScrollDownDistance] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [idleTimeout, setIdleTimeout] = useState<NodeJS.Timeout | null>(null)
    const [isToggled, setIsToggled] = useState(false)
    const navRef = useRef<HTMLButtonElement>(null)

    const SCROLL_THRESHOLD = 10
    const CLOSE_TO_TOP_THRESHOLD = 75
    const CLOSE_TO_BOTTOM_THRESHOLD = 25

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash
            if (!hash) {
                window.history.scrollRestoration = 'manual'
            } else {
                window.history.scrollRestoration = 'auto'
            }

            const handleScroll = () => {
                const currentScrollY = window.scrollY
                const maxScrollY =
                    document.documentElement.scrollHeight - window.innerHeight

                if (isToggled) {
                    return
                }

                if (idleTimeout) {
                    clearTimeout(idleTimeout)
                }

                if (currentScrollY >= maxScrollY - CLOSE_TO_BOTTOM_THRESHOLD) {
                    return
                }

                if (currentScrollY <= CLOSE_TO_TOP_THRESHOLD) {
                    setIsVisible(true)
                    setScrollUpDistance(0)
                    setScrollDownDistance(0)
                } else if (currentScrollY < lastScrollY) {
                    setScrollDownDistance(0)
                    setScrollUpDistance(
                        (prevDistance) =>
                            prevDistance + (lastScrollY - currentScrollY)
                    )

                    if (scrollUpDistance > SCROLL_THRESHOLD) {
                        setIsVisible(true)
                    }
                } else if (currentScrollY > lastScrollY) {
                    setScrollUpDistance(0)
                    setScrollDownDistance(
                        (prevDistance) =>
                            prevDistance + (currentScrollY - lastScrollY)
                    )

                    if (scrollDownDistance > SCROLL_THRESHOLD) {
                        setIsVisible(false)
                    }
                }

                if (currentScrollY > CLOSE_TO_TOP_THRESHOLD && !isToggled) {
                    const timeout = setTimeout(() => {
                        setIsVisible(false)
                    }, 5000)
                    setIdleTimeout(timeout)
                }

                setLastScrollY(currentScrollY)
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.history.scrollRestoration = 'auto'
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [
        lastScrollY,
        scrollUpDistance,
        scrollDownDistance,
        isHovered,
        idleTimeout,
        isToggled,
    ])

    const handleToggle = () => {
        setIsToggled(!isToggled)
        setIsVisible(true)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsToggled(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('mousedown', handleClickOutside)

            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [])

    return (
        <header className={styles.header}>
            <BodyBlurOverlay
                isToggled={isToggled}
                setIsToggled={setIsToggled}
            />
            <div
                className={styles.scrollBlurOverlay}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ></div>
            <nav
                ref={navRef}
                className={`${styles.nav} ${isVisible || isHovered ? styles.navVisible : styles.navHidden}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={styles.navContainer}>
                    <a href="/" className={styles.navLogo}>
                        Steele Shreve
                    </a>
                    <div className={styles.iconContainer}>
                        <a href="/search-content">
                            <SearchToggle />
                        </a>
                        <a
                            href="/search-content"
                            className={styles.searchIconMobile}
                        >
                            <Icon name="search" color="var(--primary-1)" />
                        </a>
                        <MenuToggle
                            isToggled={isToggled}
                            handleToggle={handleToggle}
                        />
                    </div>
                </div>
                <motion.div
                    className={styles.navLinks}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isToggled ? 'auto' : 0,
                        opacity: isToggled ? 1 : 0,
                        overflow: 'hidden',
                        marginTop: isToggled ? '1rem' : '0',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </nav>
        </header>
    )
}
