const mongoose = require("mongoose");

const { Schema } = mongoose;

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
  startGrade: {
    type: Number,
  },
  endGrade: {
    type: Number,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
