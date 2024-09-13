import styles from '@styles/modules/navigation.module.css'
import { BodyBlurOverlay } from '@components/overlay/Overlay.tsx'
import { MenuToggle } from '@components/nav/MenuToggle.tsx'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export const Nav = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollUpDistance, setScrollUpDistance] = useState(0)
    const [scrollDownDistance, setScrollDownDistance] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [idleTimeout, setIdleTimeout] = useState<NodeJS.Timeout | null>(null)
    const [isToggled, setIsToggled] = useState(false)
    const navRef = useRef<HTMLButtonElement>(null)
    const SCROLL_THRESHOLD = 30

    useEffect(() => {
        const hash = window.location.hash

        if (!hash) {
            window.history.scrollRestoration = 'manual'
        } else {
            window.history.scrollRestoration = 'auto'
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (isToggled) {
                return
            }

            if (idleTimeout) {
                clearTimeout(idleTimeout)
            }

            if (currentScrollY === 0) {
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

            if (currentScrollY !== 0 && !isToggled) {
                const timeout = setTimeout(() => {
                    setIsVisible(false)
                }, 5000)
                setIdleTimeout(timeout)
            }

            setLastScrollY(currentScrollY)
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsToggled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.history.scrollRestoration = 'auto'
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
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
                        Steele S.
                    </a>
                    <MenuToggle
                        isToggled={isToggled}
                        handleToggle={handleToggle}
                    />
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
