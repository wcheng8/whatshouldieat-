const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLBoolean,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLID,
} = require("graphql");
const axios = require("axios");
const SPOON_API = require("../config/keys").SPOON_API;

// API
// const SPOON_API = "2654b1102221459e91e36c17f466dc04";

const RecipeType = new GraphQLObjectType({
	name: "Recipe",
	fields: () => ({
		vegetarian: { type: GraphQLBoolean },
		healthScore: { type: GraphQLInt },
		title: { type: GraphQLString },
		readyInMinutes: { type: GraphQLInt },
		image: { type: GraphQLString },
		sourceUrl: { type: GraphQLString },
		spoonacularSourceUrl: { type: GraphQLString },
		instructions: { type: GraphQLString },
		summary: { type: GraphQLString },
		extendedIngredients: { type: new GraphQLList(IngredientType) },
	}),
});

const IngredientType = new GraphQLObjectType({
	name: "Ingredients",
	fields: () => ({
		original: { type: GraphQLString },
		id: { type: GraphQLInt },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		recipes: {
			type: new GraphQLList(RecipeType),
			resolve(parent, args) {
				return axios
					.get(`https://api.spoonacular.com/recipes/random?apiKey=${SPOON_API}`)
					.then((res) => res.data.recipes);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
