const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/whyHDX", (req, res) =>
  req.user
    ? res.render("whyHDX", {
        username: req.user.username
      })
    : res.render("whyHDX")
);

module.exports = router;
