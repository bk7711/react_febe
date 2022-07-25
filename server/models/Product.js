const mongoose = require("mongoose");
const Review = require("./Review");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
  },
  publisher: {
    type: String,
  },
  copyright: {
    type: Number,
  },
  subject: {
    type: String,
  },
  gradeBand: {
    type: String,
  },
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Product = model("Product", productSchema);

module.exports = Product;
