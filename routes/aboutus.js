const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");


router.get("/aboutus", ensureAuthenticated, (req, res) => res.render("aboutus", {
    username: req.user.username
  }));

module.exports = router;