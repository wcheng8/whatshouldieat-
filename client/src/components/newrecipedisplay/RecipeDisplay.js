import React from "react";

const RecipeDisplay = ({ title, instructions, image }) => {
	return (
		<div>
			<h1>{title}</h1>
			<h1>{instructions}</h1>
			<img src={image}></img>
		</div>
	);
};

export default RecipeDisplay;
