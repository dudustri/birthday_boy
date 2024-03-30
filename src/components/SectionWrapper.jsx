import { motion } from "framer-motion";
import { styles } from "../../styles";

export const staggerContainer = (staggerChildren, delayChildren) => {
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

const SectionWrapper = (Component, id) =>
	function highOrderComponent() {
		return (
			<motion.section
				variants={staggerContainer()}
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

export default SectionWrapper;
