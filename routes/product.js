const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => res.render("product"));

module.exports = router;