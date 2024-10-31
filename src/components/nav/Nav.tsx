import { Icon } from "@components/icon/Icon.tsx";
import { Signature } from "@components/icon/Signature.tsx";
import { MenuToggle } from "@components/nav/MenuToggle.tsx";
import { NavLinks } from "@components/nav/NavLinks.tsx";
import { SearchToggle } from "@components/nav/SearchToggle.tsx";
import { BodyBlurOverlay } from "@components/overlay/Overlay.tsx";
import styles from "@styles/modules/navigation.module.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Nav = ({ pathname }: { pathname: string }) => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isToggled, setIsToggled] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	const SCROLL_THRESHOLD = 2;
	const CLOSE_TO_TOP_THRESHOLD = 50;

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window === "undefined") return;

			const currentScrollY = window.scrollY;

			if (isToggled) return;

			if (currentScrollY < CLOSE_TO_TOP_THRESHOLD) {
				setIsVisible(true);
			} else if (
				currentScrollY < lastScrollY &&
				Math.abs(currentScrollY - lastScrollY) > SCROLL_THRESHOLD
			) {
				setIsVisible(true);
			} else if (
				currentScrollY > lastScrollY &&
				Math.abs(currentScrollY - lastScrollY) > SCROLL_THRESHOLD
			) {
				setIsVisible(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY, isToggled]);

	const handleToggle = () => {
		setIsToggled(!isToggled);
		setIsVisible(true);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setIsToggled(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className={styles.header}>
			<BodyBlurOverlay isToggled={isToggled} setIsToggled={setIsToggled} />
			<div className={styles.scrollBlurOverlay} />
			<nav
				ref={navRef}
				className={`${styles.nav} ${
					isVisible ? styles.navVisible : styles.navHidden
				}`}
			>
				<div className={styles.navContainer}>
					<a href="/" aria-label="Home">
						<Signature />
					</a>
					<div className={styles.iconContainer}>
						<a href="/search-content" aria-label="Search">
							<SearchToggle />
						</a>
						<a
							href="/search-content"
							className={styles.searchIconMobile}
							aria-label="Search"
						>
							<Icon
								name="search"
								color="var(--primary-8)"
								ariaLabel="Search"
								role="button"
							/>
						</a>
						<MenuToggle
							isToggled={isToggled}
							handleToggle={handleToggle}
							aria-label={isToggled ? "Close Menu" : "Open Menu"}
						/>
					</div>
				</div>
				<motion.div
					className={styles.navLinks}
					initial={{ height: 0, opacity: 0 }}
					animate={{
						height: isToggled ? "auto" : 0,
						opacity: isToggled ? 1 : 0,
						marginTop: isToggled ? "1rem" : "0",
					}}
					transition={{ duration: 0.3 }}
				>
					<NavLinks currentPath={pathname} />
				</motion.div>
				{isToggled && (
					<div
						style={{
							width: "100%",
							height: "100%",
							marginTop: "1rem",
							display: "flex",
							justifyContent: "flex-start",
							marginLeft: "0.75rem",
							gap: "0.5rem",
						}}
					>
						<a
							href="/rss.xml"
							className={styles.socialLogo}
							aria-label="RSS feed"
						>
							<Icon name="rss" color="var(--primary-8)" role="link" />
						</a>
						<a
							href="https://www.linkedin.com/in/steelesh/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLogo}
							aria-label="LinkedIn profile"
						>
							<Icon name="linkedin" color="var(--primary-8)" role="link" />
						</a>
						<a
							href="https://github.com/steelesh"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialLogo}
							aria-label="GitHub profile"
						>
							<Icon name="github" color="var(--primary-8)" role="link" />
						</a>
					</div>
				)}
			</nav>
		</header>
	);
};
