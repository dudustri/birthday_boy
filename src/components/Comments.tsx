import React from "react";
import Section from "./Section";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const messages = [
	{
		text: '"This motherfucker knocked all my neighboors doors to retrieve his phone. For a couple of days I thought it would be easy money but this prick ruined it."',
		person: "Anonymous Pseudo Metro Phone Thief",
	},
	{
		text: '"La concha de tu madre hijo de puta mal parido."',
		person: "Guan-Ting",
	},
	{
		text: '"I don\'t know, there something weird with this dude. I think he has sexual attraction for new english words to compose his vocabulary."',
		person: "Eduardo",
	},
	{
		text: '"Cool guy, nice biceps."',
		person: "Andreas",
	},
	{
		text: '"Schwarzwälder Bier, Badischer Wein Münster und Tannen hier sind mir daheim Ob Bayern, Preußen oder Schwaben Alle gehn in Freiburg baden Bei uns da geht kein Ball ins Aus Denn unser Antrieb heißt Applaus"',
		person: "Simon",
	},
	{
		text: '"How can someone be so fucking stupid and smart at the same time?"',
		person: "Everyone",
	},
	{
		text: '"I hope you like this shit."',
		person: "E S A G",
	},
];

const MessageCarousel = () => {
	return (
		<Carousel
			additionalTransfrom={0}
			arrows={true}
			autoPlay={true}
			autoPlaySpeed={3000}
			centerMode={false}
			containerClass="container"
			draggable
			focusOnSelect={false}
			infinite
			keyBoardControl={true}
			minimumTouchDrag={80}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			rewind={true}
			rewindWithAnimation={true}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 1,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 1,
				},
			}}
			showDots={true}
			slidesToSlide={1}
			swipeable
		>
			{messages.map((message, index) => (
				<div key={index} className="text-center max-w-2xl mx-auto">
					<p>{message.text}</p>
					<p className="pt-2 ">- {message.person}</p>
				</div>
			))}
		</Carousel>
	);
};

const Comments = () => {
	return (
		<div className="mt-24 border-2 border-white pb-24 pt-24">
			<MessageCarousel />
		</div>
	);
};

const CommentsSection = () => {
	return (
		<div className="pb-32">
			<Section Component={Comments} id="comments" />{" "}
		</div>
	);
};

export default CommentsSection;
