import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "./animation";
import SectionWrapper from "./Section";

const HappyPlace: React.FC<{ id: string }> = ({ id }) => {
	return (
		<div>
			<motion.div variants={fadeIn("right", "twen", 0.35, 0.5)}>
				<div className="flex-wrap justify-center">
					<motion.div variants={fadeIn("right", "twen", 0.35, 0.5)}>
						<div className="rainbow-background flex justify-center space-x-10 sm:space-x-14 md:space-x-18 lg:space-x-24 xl:space-x-28 2xl:space-x-32 pt-6 pb-6">
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🎉
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🎉
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🎉
							</div>
						</div>
					</motion.div>
					<motion.div variants={fadeIn("left", "twen", 0.35, 0.5)}>
						<div className="rainbow-background flex justify-center mt-10 space-x-10 sm:mt-11 sm:space-x-14 md:mt-12 md:space-x-18 lg:mt-13 lg:space-x-24 xl:mt-15 xl:space-x-28 2xl:mt-16 2xl:space-x-32 pt-6 pb-6">
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🥳
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🥳
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🥳
							</div>
						</div>
					</motion.div>
					<motion.div variants={fadeIn("right", "twen", 0.35, 0.5)}>
						<div className="rainbow-background flex justify-center mt-10 space-x-10 sm:mt-11 sm:space-x-14 md:mt-12 md:space-x-18 lg:mt-13 lg:space-x-24 xl:mt-15 xl:space-x-28 2xl:mt-16 2xl:space-x-32 pt-6 pb-6">
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🎈
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🎈
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
								🎈
							</div>
						</div>
					</motion.div>
					<div className="w-full text-center mt-32 text-cyan-300 font-bold">
						<p className="text-base text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-cyan-300 font-bold lg:max-w-full border-2 border-white pt-6 pb-6">
							HAPPY BIRTHDAY YOU PUNK!
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

const HappyBirthdaySection = () => {
	return (
		<div className="h-[85vh] mt-32 mb-48">
			<SectionWrapper Component={HappyPlace} id="happy_birthday" />{" "}
		</div>
	);
};

export default HappyBirthdaySection;
