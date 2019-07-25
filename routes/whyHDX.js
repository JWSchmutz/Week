const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth")

router.get("/whyHDX", ensureAuthenticated, (req, res) => res.render("whyHDX", {
    username: req.user.username
  }));

module.exports = router;