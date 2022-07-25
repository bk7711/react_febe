const { gql } = require("apollo-server-express");
const { User, Comment, Product, Review } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("review")
        .populate("friends");
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("review")
        .populate("friends");
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id }).populate("user").populate("reply");
    },
    comments: async (parent, { hashtags }) => {
      const params = hashtags ? { hashtags } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    product: async (parent, { _id }) => {
      return Product.findOne({ _id }).populate("review");
    },
    productSubject: async (parent, { subject }) => {
      const params = subject ? { subject } : {};
      return Product.find(params).populate("review");
    },
    productPublisher: async (parent, { publisher }) => {
      const params = publisher ? { publisher } : {};
      return Product.find(params).populate("review");
    },
    productCopyright: async (parent, { copyright }) => {
      const params = copyright ? { copyright } : {};
      return Product.find(params).populate("review");
    },
    productGrade: async (parent, { gradeBand }) => {
      const params = gradeBand ? { gradeBand } : {};
      return Product.find(params).populate("review");
    },
    review: async (parent, { username }) => {
      return (await Review.findOne({ username })).populated("product");
    },
    overallReview: async (parent, { overall }) => {
      const params = overall ? { overall } : {};
      return Review.find(params).populate("product");
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect password");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comment: comment._id } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("Please log in first.");
    },
    addReply: async (parent, { commentId, replyBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { reply: { replyBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedComment;
      }
      throw new AuthenticationError("Please log in first.");
    },
    addReview: async (parent, args, context) => {
      if (context.user) {
        const review = await Review.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { review: review._id } },
          { new: true }
        );
      }
      throw new AuthenticationError("Please log in first.");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("Please log in first.");
    },
  },
};

module.exports = resolvers;
