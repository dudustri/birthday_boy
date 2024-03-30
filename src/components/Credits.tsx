import React from "react";
import Section from "./Section";

const Credits = () => {
	return (
		<div className="text-center mt-24 pt-12">
			<p className="mb-12 rainbow-text font-extrabold">Dream Team:</p>
			<div className="flex justify-center items-start space-x-8 mb-16 pb-28">
				<div className="flex flex-col items-center">
					<img
						src="/team/projectmanager.jpg"
						alt="Profile"
						className="w-[180px] h-[180px] rounded-full object-cover border-2 border-pink-200"
					/>
					<figcaption className="text-center text-xs mt-2">
						Product Owner
					</figcaption>
					<div className="flex items-center text-xs mt-1 text-red-400">
						<span>&#8593;</span> {/* Unicode arrow pointing up */}
					</div>
					<div className="text-center mt-1 text-xs text-red-400">
						Complains with this lazy fucker
					</div>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="/team/reactbitch.jpg"
						alt="Profile"
						className="w-[180px] h-[180px] rounded-full object-cover border-2 border-blue-400"
					/>
					<figcaption className="text-center text-xs text-sm mt-2">
						React bitch for 1 night
					</figcaption>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="/team/cto.jpg"
						alt="Profile"
						className="w-[180px] h-[180px] rounded-full object-cover border-2 border-yellow-200"
					/>
					<figcaption className="text-center text-sm text-xs mt-2">
						CTO
					</figcaption>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="/team/Cloudengineer.jpg"
						alt="Profile"
						className="w-[180px] h-[180px] rounded-full object-cover border-2 border-green-300"
					/>
					<figcaption className="text-center text-xs text-sm mt-2">
						Cloud Engineer (REMOTE)
					</figcaption>
				</div>
			</div>
		</div>
	);
};

const CreditsSection = () => {
	return <Section Component={Credits} id="credits" />;
};

export default CreditsSection;
