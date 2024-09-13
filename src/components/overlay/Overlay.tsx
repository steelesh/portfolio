import styles from '@styles/modules/overlay.module.css'
import React from 'react'

export const BodyBlurOverlay = ({
    isToggled,
    setIsToggled,
}: {
    isToggled: boolean
    setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div
            className={`${styles.bodyBlurOverlay} ${
                isToggled ? styles.pointerEventsAuto : styles.pointerEventsNone
            }`}
            onClick={() => {
                setIsToggled(false)
            }}
        ></div>
    )
}
