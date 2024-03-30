import React from "react";
import { BrowserRouter } from "react-router-dom";
import CommentsSection from "./components/Comments.jsx";
import Entry from "./components/Entry.jsx";
import ImageCarouselSection from "./components/ImageCarousel.jsx";
import HappyPlaceSection from "./components/HappyPlace.jsx";
import CreditsSection from "./components/Credits.js";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Entry />
				<HappyPlaceSection />
				<div className="w-full h-0.5 bg-sky-50"></div> {/* Line */}
				<ImageCarouselSection />
				<div className="w-full h-0.5 bg-sky-50"></div> {/* Line */}
				<CommentsSection />
				<div className="w-full h-0.5 bg-sky-50"></div> {/* Line */}
				<CreditsSection />
			</div>
		</BrowserRouter>
	);
}

export default App;
