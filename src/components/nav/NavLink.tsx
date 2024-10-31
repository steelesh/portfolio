import { Icon } from "@components/icon/Icon.tsx";
import type { IconSize } from "@components/icon/IconSizeMap.ts";
import styles from "@styles/modules/navigation-links.module.css";
import type React from "react";

interface NavLinkProps {
	href: string;
	iconName: string;
	iconSize?: IconSize;
	iconColor?: string;
	additionalClass?: string;
	label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
	href,
	iconName,
	iconSize = "sm",
	iconColor = "var(--primary-2)",
	additionalClass = "",
	label,
}) => {
	const className = `${styles.navlink} ${additionalClass}`.trim();

	return (
		<a className={className} href={href}>
			<Icon
				name={iconName}
				size={iconSize}
				color={iconColor}
				role="presentation"
			/>
			<span>{label}</span>
		</a>
	);
};
