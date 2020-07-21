var express = require("express");
var routes = require("./app/routes");

var app = express();

var port = process.env.PORT || 4000;

app.use("/api", routes);

app.get("/", (req, res) => res.send("HELOOO"));

app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
