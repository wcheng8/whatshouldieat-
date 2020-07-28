// Libraries
import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Randomrecipe from "./components/newrecipedisplay/Randrecipe";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});
function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				<Navbar />
				<div className="container pt-4 pb-4">
					<Randomrecipe />
				</div>
				<Footer />
			</div>
		</ApolloProvider>
	);
}

export default App;
