const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const replySchema = new Schema(
  {
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
    reply: [replySchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

commentSchema.virtual("replyCount").get(function () {
  return this.reply.length;
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
