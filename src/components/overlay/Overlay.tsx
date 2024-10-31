import styles from "@styles/modules/overlay.module.css";
import type React from "react";

export const BodyBlurOverlay = ({
	isToggled,
	setIsToggled,
}: {
	isToggled: boolean;
	setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			className={`${styles.bodyBlurOverlay} ${
				isToggled ? styles.pointerEventsAuto : styles.pointerEventsNone
			}`}
			onClick={() => {
				setIsToggled(false);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setIsToggled(false);
				}
			}}
			role="presentation"
		/>
	);
};
