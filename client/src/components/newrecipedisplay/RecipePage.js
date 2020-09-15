import React, { useState, useEffect } from "react";

function RecipePage() {
	const [randomRecipe, setRandomRecipe] = useState({});
	useEffect(() => {
		const random = window.localStorage.getItem("randomRecipe");
		console.log("setting random recipe");
		setRandomRecipe(JSON.parse(random));
	});
	return (
		<>
			<div className="row">
				<img
					src={randomRecipe.image}
					className="img-fluid"
					alt={randomRecipe.image}
				/>
				{randomRecipe.image}
			</div>
			<div className="row">
				<div>
					<h1>{randomRecipe.title}</h1>
				</div>
			</div>
		</>
	);
}

export default RecipePage;
