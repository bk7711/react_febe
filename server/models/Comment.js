const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    commentBody: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    hashtags: [],
    reply: [replySchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

commentSchema.virtual("replyCount").get(function () {
  return this.reply.length;
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
