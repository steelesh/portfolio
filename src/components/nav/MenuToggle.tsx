import { motion } from 'framer-motion'

export const MenuToggle = ({
    isToggled,
    handleToggle,
}: {
    isToggled: boolean
    handleToggle: () => void
}) => (
    <motion.svg
        onClick={handleToggle}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        style={{ cursor: 'pointer' }}
    >
        <motion.g
            fill="var(--primary-1)"
            stroke="var(--primary-1)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        >
            <motion.circle
                cx="8"
                cy="2.5"
                r=".75"
                animate={{
                    y: isToggled ? 5.5 : 0,
                    opacity: isToggled ? 0 : 1,
                }}
                initial={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            <motion.circle
                cx="8"
                cy="8"
                r={isToggled ? 3 : 0.75}
                animate={{
                    r: isToggled ? 3 : 0.75,
                    fill: isToggled ? 'var(--accent-fg)' : 'var(--primary-1)',
                    stroke: isToggled ? 'var(--accent-fg)' : 'var(--primary-1)',
                }}
                initial={{
                    r: 0.75,
                    fill: 'var(--primary-1)',
                    stroke: 'var(--primary-1)',
                }}
                transition={{ duration: 0.3 }}
            />

            <motion.circle
                cx="8"
                cy="13.5"
                r=".75"
                animate={{
                    y: isToggled ? -5.5 : 0,
                    opacity: isToggled ? 0 : 1,
                }}
                initial={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.g>
    </motion.svg>
)
