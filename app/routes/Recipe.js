const express = require("express");
const app = express.Router();
const recipe = require("../controllers/recipe");
// Create a new Note

app.post("/", recipe.create);

// Retrieve all Notes
app.get("/", recipe.findAll);

// Retrieve a single Note with noteId
app.get("/:recipeId", recipe.findOne);

// Update a Note with noteId
app.put("/:recipeId", recipe.update);

// Delete a Note with noteId
app.delete("/:recipeId", recipe.delete);

module.exports = app;
