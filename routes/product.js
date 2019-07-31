const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Supplies = require("../models/Supplies");

router.get("/product", ensureAuthenticated, (req, res) => {
  Supplies.find().sort( { rank: 1 } ).limit(5).then(
    (result) => {
      const hbs_obj = {
        username: req.user.username,
        result: result
      };
    res.render("product", hbs_obj);
    console.log(hbs_obj);
    });
});

module.exports = router;