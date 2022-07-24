const mongoose = require("mongoose");
const Product = require("./Product");

const { Schema } = mongoose;

const reviewSchema = new Schema({
  implementationMonth: {
    type: String,
  },
  implementationYear: {
    type: Number,
    minlength: 4,
  },
  differentiation: {
    type: Number,
  },
  assessments: {
    type: Number,
  },
  technology: {
    type: Number,
  },
  lessonDesign: {
    type: Number,
  },
  professionalDevelopment: {
    type: Number,
  },
  support: {
    type: Number,
  },
  product: [Product.schema],
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
