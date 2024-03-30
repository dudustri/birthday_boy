import { motion, MotionConfig } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../../styles.js";
import { textVariant } from "./animation.js";

const Entry: React.FC = () => (
	<section className="page-pattern relative w-full h-[100vh] mx-auto">
		<div className="flex h-3/5 justify-center items-center">
			<img
				src="/team/birthdayboy.jpg"
				alt="Profile"
				className="w-[256px] h-[256px] rounded-full object-cover border-2 border-white"
			/>
		</div>
		<div className="flex justify-center items-center text-center mt-[-70px] sm:mt-[-44px] md:mt-[-38px] lg:mt-[-34px] xl:mt-[-30px] 2xl:mt-[-24px]">
			<div className="rounded-full bg-opacity-70 bg-black pr-8 pl-8 pt-6 pb-6 sm:pr-12 sm:pl-12 lg:pr-16 lg:pl-16 xl:pr-20 xl:pl-20 2xl:pr-24 2xl:pl-24">
				<h1 className={styles.pageHeadText}>
					<span className="text-cyan-300 text-xl max-w-full sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
						<Typewriter
							options={{
								strings: [
									"Hello Jorge!",
									"Oi Jorginho?",
									"Hola Jorgito uaaaaaa ~",
									"Arrombado do caralho",
									"Terror de la España",
									"El pistolero de Mallorca",
									"Hijo de puta",
									"Chimarrão lover",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</span>
				</h1>

				<motion.div
					variants={textVariant(0.35)}
					initial="hidden"
					whileInView="show"
				>
					<p
						className={`mt-8 text-white text-[10px] sm:text-base md:text-lg lg:text-lg xl:max-w-4xl xl:text-xl 2xl:text-xl`}
					>
						Feliz cumpleaños, Jorge! 🎉 We built a birthday website for you,
						cunt, to celebrate your life journey under the digital and cloudy
						sky of Denmark. It is a reminder that age is just a number which
						keeps increasing like entropy and your fucking dark humour with each
						passing year!😨 Cheers buddy 🥂🍾💫
					</p>
				</motion.div>
			</div>
		</div>
	</section>
);

export default Entry;
