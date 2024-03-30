import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../../styles.js";

const Entry: React.FC = () => (
	<section className="page-pattern relative w-full h-[100vh] mx-auto">
		<div className="flex h-3/5 justify-center items-center">
			<img
				src="/team/birthdayboy.jpg"
				alt="Profile"
				className="w-[256px] h-[256px] rounded-full object-cover border-2 border-white"
			/>
		</div>
		<div className="flex justify-center items-center text-center mt-[-50px] sm:mt-[-44px] md:mt-[-38px] lg:mt-[-34px] xl:mt-[-30px] 2xl:mt-[-24px]">
			<div className="rounded-full bg-opacity-70 bg-black pr-24 pl-24 pt-12 pb-12">
				<h1 className={styles.pageHeadText}>
					<span className="text-cyan-300 text-2xl max-w-full sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
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
				<p
					className={`mt-8 text-white text-sm sm:text-base md:text-lg lg:text-lg xl:max-w-4xl xl:text-xl 2xl:text-xl`}
				>
					Feliz cumpleaños, Jorge! 🎉 We built a birthday website you cunt,
					celebrating your journey under the digital sky, where every click is a
					reminder that age is just a number, unlike your dark humour, which
					seems to get darker with every passing year!😱
				</p>
			</div>
		</div>
	</section>
);

export default Entry;
