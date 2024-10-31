import React, { useEffect, useState } from "react";

export const MenuToggle = ({
	isToggled,
	handleToggle,
}: {
	isToggled: boolean;
	handleToggle: () => void;
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [radius, setRadius] = useState(0.75);
	const [topCircleY, setTopCircleY] = useState(2.5);
	const [bottomCircleY, setBottomCircleY] = useState(13.5);
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		if (isToggled) {
			setRadius(3);
			setTopCircleY(8);
			setBottomCircleY(8);
			setOpacity(0);
		} else {
			setRadius(0.75);
			setTopCircleY(2.5);
			setBottomCircleY(13.5);
			setOpacity(1);
		}
	}, [isToggled]);

	const getColor = () => {
		if (isToggled) return "var(--green-5)";
		return isHovered ? "var(--primary-9-5)" : "var(--primary-8)";
	};

	return (
		<svg
			onClick={handleToggle}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					handleToggle();
				}
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			style={{ cursor: "pointer", transition: "transform 0.3s" }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			aria-expanded={isToggled ? "true" : "false"}
			aria-controls="nav"
			aria-haspopup="true"
			aria-hidden={isToggled ? "false" : "true"}
		>
			<title>{isToggled ? "Close menu" : "Open menu"}</title>
			<g
				fill={getColor()}
				stroke={getColor()}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			>
				<circle
					cx="8"
					cy={topCircleY}
					r={0.75}
					opacity={opacity}
					style={{ transition: "all 0.3s" }}
				/>
				<circle cx="8" cy="8" r={radius} style={{ transition: "all 0.3s" }} />
				<circle
					cx="8"
					cy={bottomCircleY}
					r={0.75}
					opacity={opacity}
					style={{ transition: "all 0.3s" }}
				/>
			</g>
		</svg>
	);
};
