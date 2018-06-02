const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Bookschema = new Schema({
  name: {
    type: String,
    required: true
  },
  publishDate: {
    type: String
  },
  details:{
    type: String,
    required: true
  },
  imgUrl:{
    type:String,
    required:true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = Book = mongoose.model("Book", Bookschema);
