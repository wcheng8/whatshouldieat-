import renderHTML from "react-render-html";
import React, { useState, useEffect } from "react";

function RecipePage() {
	const [randomRecipe, setRandomRecipe] = useState({});
	const [ingredients, setIngredients] = useState([]);
	const [cuisines, setCuisines] = useState([]);

	useEffect(() => {
		const random = window.localStorage.getItem("randomRecipe");
		console.log("setting random recipe");
		setRandomRecipe(JSON.parse(random));
		setIngredients(JSON.parse(random).extendedIngredients);
		setCuisines(JSON.parse(random).cuisines);
	}, []);
	console.log(randomRecipe.extendedIngredients);
	return (
		<>
			<div className="row">
				<h1>{randomRecipe.title}</h1>
			</div>
			<div className="row">
				<img
					src={randomRecipe.image}
					className="img-fluid"
					alt={randomRecipe.image}
				/>
			</div>
			<br />
			<div className="row">
				<div className="col-3">
					{" "}
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-alarm"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
						/>
					</svg>{" "}
					{randomRecipe.readyInMinutes} Minutes
				</div>
				<div className="col-4">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-heart-fill"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
						/>
					</svg>{" "}
					HealthScore: {randomRecipe.healthScore}
				</div>
				<div className="col-4">
					{randomRecipe.vegetarian && (
						<div className="btn btn-success">Vegetarian</div>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col-2">Score: {randomRecipe.spoonacularScore}/100</div>
				<ol>
					{cuisines.map((cuisines) => (
						<div className="btn btn-light">{cuisines}</div>
					))}
				</ol>
			</div>
			<hr />
			<div className="row">
				<div>{renderHTML(String(randomRecipe.summary))}</div>
			</div>
			<hr />
			<div className="row">
				<h3>Instructions</h3>
				<br />
				<div>{renderHTML(String(randomRecipe.instructions))}</div>
			</div>
			<hr />
			<div className="row">
				<h3>Ingredients</h3>
			</div>
			<div className="row">
				<ol>
					{ingredients.map((ingredient) => (
						<li>{ingredient.original}</li>
					))}
				</ol>
			</div>
		</>
	);
}

export default RecipePage;
