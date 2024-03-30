import { motion, Variants } from "framer-motion";
import { styles } from "../../styles";
import React from "react";

interface SectionProps {
	id: string;
	Component: React.ComponentType<any>;
}

const staggerContainer = (
	staggerChildren: number,
	delayChildren?: number
): Variants => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	};
};

const Section: React.FC<SectionProps> = ({ id, Component }) => {
	return (
		<motion.section
			variants={staggerContainer(0.5)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.5 }}
			className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
		>
			<span className="hash-span" id={id}>
				&nbsp;
			</span>
			<Component />
		</motion.section>
	);
};

export default Section;
