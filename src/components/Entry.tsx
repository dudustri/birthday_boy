import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { styles } from "../../styles";

const Entry = () => (
	<section className="relative w-full h-[85vh] max-h-entry mx-auto">
		<div className="absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-8">
			<div className="flex flex-col justify-center items-center mt-5">
				<div className="w-5 h-5 rounded-full bg-[#fff59d] z-10" />
				<div className="w-1 sm:h-80 h-40 yellow-gradient" />
			</div>
			<div className="max-w-entry-text">
				<h1 className={styles.pageHeadText}>
					<span className="text-[#fff59d]">
						<Typewriter
							options={{
								strings: [
									"Hello Jorge!",
									"Oi Jorginho?",
									"Hola Jorgito uaaaaaaaa ~",
									"Terror de la España",
									"Hijo de puta",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</span>
				</h1>
				<p className={`${styles.pageSubText} mt-5 text-white`}>
					This is your birthday page! Feliz cumpleaños con su momento de la base
					de datos de la base de datos de la base de datos de la base!
				</p>
			</div>
			<div className="ml-96 ps-20 mt-2">
				<img
					src="https://infobrisas-s3.cdn.net.ar/s3i233/2023/07/infobrisas/images/15/07/150748_e940cbef8e77a3543068fe232cf55ce8fa14e26aa100e41821a2050bf4edfb67/xs.jpg"
					className="w-[256px] h-[256px] rounded-full object-cover border-2 border-white"
				/>
			</div>
			<div className="absolute xs:bottom-8 bottom-4 w-full flex justify-center items-center">
				<a href="#HappyPlace">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-yellow-200 flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-2 h-2 rounded-full bg-yellow-200 mb-1"
						/>
					</div>
				</a>
			</div>
		</div>
	</section>
);

export default Entry;
