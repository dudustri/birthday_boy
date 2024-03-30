import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SectionWrapper from "./Section";
import { motion } from "framer-motion";
import { fadeIn } from "./animation";

const ImageCarousel: React.FC = () => (
	<motion.div variants={fadeIn("right", "twen", 0.35, 0.5)}>
		<div className="w-2/6 mx-auto mt-8 mb-8 pb-10 pt-10">
			<Carousel
				autoPlay={true}
				autoFocus={true}
				centerMode={true}
				centerSlidePercentage={95}
				interval={3000}
				infiniteLoop={true}
				showStatus={true}
				showThumbs={true}
				transitionTime={1000} // Adjust the transition duration (in milliseconds)
			>
				<div className="flex justify-center items-center">
					<img src="/1.jpg" alt="Slide 1" />
					<p className="legend">Jorge and a random guy</p>
				</div>
				<div>
					<img src="/2.jpg" alt="Slide 2" className="max-h-full" />
					<p className="legend">
						Jorge increasing his network with a CEO by interest
					</p>
				</div>
				<div>
					<img src="/3.jpg" alt="Slide 3" />
					<p className="legend">Le buff boyz - ITU gym</p>
				</div>
				<div>
					<img src="/4.jpg" alt="Slide 4" />
					<p className="legend">Moment of glory after hide his stuff</p>
				</div>
				<div>
					<img src="/5.jpg" alt="Slide 5" />
					<p className="legend">Fuck you, btw</p>
				</div>
				<div>
					<img src="/6.jpg" alt="Slide 6" />
					<p className="legend">Summer Jorge</p>
				</div>
				<div>
					<img src="/7.jpg" alt="Slide 7" />
					<p className="legend">Hungry Jorge and his spring bomb invention</p>
				</div>
				<div>
					<img src="/8.jpg" alt="Slide 8" />
					<p className="legend">Happy Jorge</p>
				</div>
				<div>
					<img src="/9.jpg" alt="Slide 9" />
					<p className="legend">Party Jorge and some weird people</p>
				</div>
				<div>
					<img src="/10.jpg" alt="Slide 10" />
					<p className="legend">Jorge Snus hunter - he could feel it</p>
				</div>
				<div>
					<img src="/11.jpg" alt="Slide 11" />
					<p className="legend">Nice Cycler Jorge</p>
				</div>
			</Carousel>
		</div>
	</motion.div>
);

const ImageCarouselSection = () => {
	return <SectionWrapper Component={ImageCarousel} id="image_carousel" />;
};

export default ImageCarouselSection;
