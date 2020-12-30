const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Supplies = require("../models/Supplies");

router.get("/product", ensureAuthenticated, (req, res) => {
  Supplies.find()
    .sort({ rank: 1 })
    .then((result) => {
      const firstResults = [];
      const unpaidResults = [];
      for (let i = 0; i < 5; i++) {
        firstResults.push(result[i]);
      }
      for (let i = 5; i < result.length; i++) {
        unpaidResults.push(result[i]);
      }
      console.log("====", result);
      const hbs_obj = {
        username: req.user.username,
        result: firstResults,
        unpaidResult: unpaidResults,
      };
      console.log(hbs_obj.result[0]);
      res.render("product", hbs_obj);
      console.log(hbs_obj);
    });
});

module.exports = router;
