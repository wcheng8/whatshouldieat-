const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	// Adds createdAt and updatedAt field
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Recipe", RecipeSchema);
