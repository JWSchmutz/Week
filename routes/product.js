const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const Supply = require("../models/Supplies");

router.get("/product", ensureAuthenticated, (req, res) => {
  Supply.find()
    .lean()
    .sort({ Rank: 1 })
    .then((result) => {
      const firstResults = [];
      const unpaidResults = [];
      for (let i = 0; i < 5; i++) {
        firstResults.push(result[i]);
      }
      for (let i = 5; i < result.length; i++) {
        unpaidResults.push(result[i]);
      }
      const hbs_obj = {
        username: req.user.username,
        result: firstResults,
        unpaidResult: unpaidResults,
      };
      console.log(hbs_obj);
      res.render("product", hbs_obj);
    });
});

module.exports = router;
