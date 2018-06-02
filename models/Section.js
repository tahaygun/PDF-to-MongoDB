const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Sectionschema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
  },
  book: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Book"
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});
Sectionschema.index({ title: "text", content: "text" });
module.exports = Section = mongoose.model("Section", Sectionschema);
