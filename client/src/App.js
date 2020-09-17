// Libraries
import React, { useState } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeAdd from "./components/newrecipedisplay/RecipeAdd";
import Randomrecipe from "./components/newrecipedisplay/Randrecipe";
import RecipePage from "./components/newrecipedisplay/RecipePage";
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});
function App() {
	const [randomRecipe, setRandomRecipe] = useState({});
	const getRandomRecipe = (e) => {
		setRandomRecipe(e);
		window.localStorage.setItem("randomRecipe", JSON.stringify(e));
	};
	return (
		<ApolloProvider client={client}>
			<Router>
				<Navbar />
				<Switch>
					<div className="container pt-4 pb-4">
						<Route exact path="/random">
							<Randomrecipe getRandomRecipe={getRandomRecipe} />
						</Route>
						<Route exact path="/random/full">
							<RecipePage />
						</Route>
						<Route exact path="/add">
							<RecipeAdd />
						</Route>
					</div>
				</Switch>
				<Footer />
			</Router>
		</ApolloProvider>
	);
}

export default App;
