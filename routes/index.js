const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("index"));
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    username: req.user.username
  })
);

module.exports = router;
