const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/aboutus", (req, res) =>
  req.user
    ? res.render("aboutus", {
        username: req.user.username
      })
    : res.render("aboutus")
);

module.exports = router;
