const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./app/graphql/Schema");
const routes = require("./app/routes/Recipe");
const mongoose = require("mongoose");
const db = require("./app/config/keys").mongoURI;

var app = express();

// Connect to MongoDB databse
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected!"))
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now... ", err);
		process.exit();
	});

var port = process.env.PORT || 4000;

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.use("/api/recipe", routes);

app.get("/", (req, res) => res.send("HELOOO"));

app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
