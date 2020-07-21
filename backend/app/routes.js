var router = require("express").Router();

router.get("/", function (req, res) {
	res.json({
		status: "API Works",
		message: "Welcome to FirstRest API",
	});
});

module.exports = router;
