const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Traffic = new Schema({
    clicked: {
    type: Number,
    default:0
  }
});
module.exports = Section = mongoose.model("Traffic", Traffic);
