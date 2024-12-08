import { NavLink } from "@components/nav/NavLink";
import { SubNavLinks } from "@components/nav/SubNavLinks";
import styles from "@styles/modules/navigation-links.module.css";
import React from "react";

export const NavLinks = ({ currentPath }: { currentPath: string }) => {
	return (
		<>
			<NavLink
				href="/"
				iconName="home"
				iconSize="md"
				iconColor="var(--primary-8)"
				label="Home"
				additionalClass={currentPath === "/" ? styles.active : ""}
			/>
			<NavLink
				href="/about"
				iconName="about"
				iconSize="md"
				iconColor="var(--primary-8)"
				label="About"
				additionalClass={currentPath.startsWith("/about") ? styles.active : ""}
			/>
			<NavLink
				href="/work"
				iconName="work"
				iconSize="md"
				iconColor="var(--primary-8)"
				label="Work"
				additionalClass={currentPath.startsWith("/work") ? styles.active : ""}
			/>
			<NavLink
				href="/posts"
				iconName="posts"
				iconSize="md"
				iconColor="var(--primary-8)"
				label="Posts"
				additionalClass={currentPath.startsWith("/posts") ? styles.active : ""}
			/>
			<NavLink
				href="/cv"
				iconName="cv"
				iconSize="md"
				iconColor="var(--primary-8)"
				label="View CV"
				additionalClass={currentPath === "/cv" ? styles.active : ""}
			/>
			<SubNavLinks />
		</>
	);
};
