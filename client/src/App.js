// Libraries
import React, { useState } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Randomrecipe from "./components/newrecipedisplay/Randrecipe";
import RecipePage from "./components/newrecipedisplay/RecipePage";
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});
function App() {
	const [randRecipe, setrandRecipe] = useState({});
	const getrrecipe = (e) => {
		setrandRecipe(e);
	};
	return (
		<ApolloProvider client={client}>
			<Router>
				<Navbar />
				<Switch>
					<div className="container pt-4 pb-4">
						<Route exact path="/random">
							<Randomrecipe getrrecipe={getrrecipe} />
						</Route>
						<Route exact path="/random/:id" component={RecipePage} />
					</div>
				</Switch>
				<Footer />
			</Router>
		</ApolloProvider>
	);
}

export default App;
