const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const replySchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    replyBody: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJson: {
      getters: true,
    },
  }
);

const Reply = model("Reply", replySchema);

module.exports = Reply;
