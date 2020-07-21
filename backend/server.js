var express = require("express");

var app = express();

var port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("HELOOO"));

app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
