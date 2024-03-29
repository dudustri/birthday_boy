import React from "react";
import { BrowserRouter } from "react-router-dom";
import Comments from "./components/Comments.jsx";
import Entry from "./components/Entry.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import HappyPlace from "./components/HappyPlace.jsx";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Entry />
				<HappyPlace />
				<ImageCarousel />
				<Comments />
			</div>
		</BrowserRouter>
	);
}

export default App;
