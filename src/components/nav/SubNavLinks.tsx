import { Icon } from "@components/icon/Icon.tsx";
import styles from "@styles/modules/sub-navigation-links.module.css";

export const SubNavLinks = () => (
	<div className={styles.subNavLinks}>
		<p className={styles.availableForHire}>
			<Icon name="pulse" color="var(--green-5)" role="presentation" />
			Available For Hire
		</p>
		<a className={styles.contactLink} href="/contact">
			<span className={styles.contactText}>Contact</span>
			<Icon
				name="arrow"
				size="sm"
				color="var(--primary-10)"
				role="presentation"
			/>
		</a>
	</div>
);
