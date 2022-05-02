const mongoose = require("mongoose");

const SupplySchema = new mongoose.Schema({
  Rank: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  ItemNumber: {
    type: String,
    required: true,
  },
});

const Supplies = mongoose.model("Supply", SupplySchema);

module.exports = Supplies;
