import axios from "axios";

// API Keys
SPOONIFY_API_KEY = "2654b1102221459e91e36c17f466dc04";

// Get requests from API
export async function randomRecipe() {
	let randomrecipe = await axios.get(
		`https://api.spoonacular.com/recipes/random?apiKey=2654b1102221459e91e36c17f466dc04&number=1&tags=vegetarian,dessert`
	);
	console.log(randomrecipe);
}
