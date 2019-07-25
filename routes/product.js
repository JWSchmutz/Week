const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/product", ensureAuthenticated, (req, res) => res.render("product", {
    username: req.user.username
  }));

module.exports = router;