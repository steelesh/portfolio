import React, { useEffect, useRef, useState } from 'react'
import { type P5I, p5i } from 'p5i'

export const DotBg = () => {
    const el = useRef<HTMLDivElement | null>(null)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const {
        mount,
        unmount,
        createCanvas,
        background,
        noFill,
        stroke,
        noise,
        noiseSeed,
        resizeCanvas,
        cos,
        sin,
        TWO_PI,
    } = p5i()

    let w = window.innerWidth
    let h = window.innerHeight

    const SCALE = 200
    const LENGTH = 8
    const SPACING = 18

    function getForceOnPoint(x: number, y: number, z: number) {
        return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI
    }

    const existingPoints = new Set<string>()
    const points: { x: number; y: number; opacity: number }[] = []

    function addPoints() {
        existingPoints.clear() // Clear existing points to avoid duplication
        points.length = 0 // Clear the points array

        for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
            for (let y = -SPACING / 2; y < h + SPACING; y += SPACING) {
                const id = `${x}-${y}`
                if (existingPoints.has(id)) continue
                existingPoints.add(id)
                points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 })
            }
        }
    }

    function setup() {
        createCanvas(w, h)
        background(theme === 'light' ? '#ffffff' : '#000000')
        stroke(theme === 'light' ? '#ccc' : '#666')
        noFill()
        noiseSeed(+new Date())
        addPoints()
    }

    function draw({ circle }: P5I) {
        background(theme === 'light' ? '#ffffff' : '#000000')
        const t = +new Date() / 10000
        const offsetY = window.scrollY // Dynamically update scroll offset

        for (const p of points) {
            const { x, y } = p
            const rad = getForceOnPoint(x, y, t)
            const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH
            const nx = x + cos(rad) * length
            const ny = y + sin(rad) * length
            stroke(
                theme === 'light' ? 200 : 100,
                theme === 'light' ? 200 : 100,
                theme === 'light' ? 200 : 100,
                (Math.abs(cos(rad)) * 0.8 + 0.2) * p.opacity * 255
            )
            circle(nx, ny - offsetY, 1)
        }
    }

    function restart() {
        if (el.current) mount(el.current, { setup, draw })
    }

    useEffect(() => {
        restart()

        const handleResize = () => {
            w = window.innerWidth
            h = window.innerHeight
            resizeCanvas(w, h)
            addPoints()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            unmount()
            window.removeEventListener('resize', handleResize)
        }
    }, [theme])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleThemeChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light')
        }

        setTheme(mediaQuery.matches ? 'dark' : 'light')
        mediaQuery.addEventListener('change', handleThemeChange)

        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange)
        }
    }, [])

    return (
        <div
            ref={el}
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: -1,
            }}
        />
    )
}
