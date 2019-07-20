const express = require("express");
const router = express.Router();

router.get("/whyHDX", (req, res) => res.render("whyHDX"));

module.exports = router;