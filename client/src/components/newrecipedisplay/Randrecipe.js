import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RecipeDisplay from "./RecipeDisplay";

const RECIPE_QUERY = gql`
	query RecipeQuery {
		recipes {
			vegetarian
			healthScore
			title
			readyInMinutes
			image
			summary
			sourceUrl
			spoonacularSourceUrl
			instructions
			extendedIngredients {
				id
				original
			}
		}
	}
`;
export class randrecipe extends Component {
	render() {
		return (
			<div>
				<h1 className="display-4 my-3">Recipes</h1>
				<Query query={RECIPE_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);
						return (
							<>
								{data.recipes.map((recipe) => (
									<RecipeDisplay
										summary={recipe.summary}
										title={recipe.title}
										image={recipe.image}
									/>
								))}
							</>
						);
					}}
				</Query>
			</div>
		);
	}
}

export default randrecipe;
