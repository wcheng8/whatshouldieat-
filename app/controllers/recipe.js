const Recipe = require("../models/Recipe");

// Create and save a new recipe
exports.create = (req, res) => {
	if (!req.body.content) {
		return res.status(400).send({
			message: "Recipe content cannot be empty",
		});
	}
	if (!req.body.title) {
		return res.status(400).send({
			message: "Recipe title cannot be empty",
		});
	}

	const recipe = new Recipe({
		title: req.body.title,
		content: req.body.content,
	});

	recipe
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};

// Retreive all Recipes
exports.findAll = (req, res) => {
	Recipe.find()
		.then((recipes) => {
			res.send(recipes);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};

// Find a single recipe with a recipeId
exports.findOne = (req, res) => {
	Recipe.findById(req.params.recipeId)
		.then((recipe) => {
			if (!recipe) {
				return res.status(404).send({
					message: "Recipe not found with id " + req.params.recipeId,
				});
			}
			res.send(recipe);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Recipe not found with id " + req.params.recipeId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving recipe with id " + req.params.recipeId,
			});
		});
};

// Update a recipe identified by the recipeId in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body.title) {
		return res.status(400).send({
			message: "Recipe title can not be empty",
		});
	}
	if (!req.body.content) {
		return res.status(400).send({
			message: "Recipe content can not be empty",
		});
	}
	Note.findByIdAndUpdate(
		req.params.recipeId,
		{
			title: req.body.title,
			content: req.body.content,
		},
		{ new: true }
	)
		.then((recipe) => {
			if (!recipe) {
				return res.status(404).send({
					message: "Note not found with id " + req.params.recipeId,
				});
			}
			res.send(recipe);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Recipe not found with id" + req.params.recipeId,
				});
			}
			return res.status(500).send({
				message: "Error updating recipe with id " + req.params.recipeId,
			});
		});
};

// Delete a recipe with the specified recipeId in the request
exports.delete = (req, res) => {
	Recipe.findByIdAndRemove(req.params.recipeId)
		.then((recipe) => {
			if (!recipe) {
				return res.status(404).send({
					message: "Recipe not found with id " + req.params.recipeId,
				});
			}
			res.send({ message: "Recipe deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name == "Not found") {
				return res.status(404).send({
					message: "Recipe not found with id " + req.params.recipeId,
				});
			}
			return res.status(500).send({
				message: "Could not delete recipe with id " + req.params.recipeId,
			});
		});
};
