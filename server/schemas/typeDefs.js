const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    district: String
    usertype: String
    review: [Review]
    comment: [Comment]
    friendCount: Int
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
    replyCount: Int
    reply: [Reply]
  }
  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }
  type Review {
    _id: ID
    username: String
    implementationMonth: String
    implementationYear: Int
    differentiation: Int
    assessments: Int
    technology: Int
    lessonDesign: Int
    professionalDevelopment: Int
    support: Int
    overall: Int
    reviewBody: String
    product: [Product]
  }
  type Product {
    _id: ID
    title: String
    publisher: String
    copyright: Int
    subject: String
    gradeBand: String
    review: [Review]
  }
  type Query {
    user(username: String!): User
    users: [User]
    comment(_id: ID!): Comment
    allComments: [Comment]
    comments(hashtags: String): [Comment]
    product(_id: ID!): Product
    products: [Product]
    productSubject(subject: String!): [Product]
    productPublisher(publisher: String!): [Product]
    productCopyright(copyright: Int!): [Product]
    productGrade(gradeBand: String!): [Product]
    review(_id: ID!): Review
    overallReview(overall: Int!): [Review]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      usertype: String!
      district: String!
    ): Auth
    addComment(commentBody: String!): Comment
    addReply(commentId: ID!, replyBody: String!): Comment
    addReview(reviewBody: String!, overall: Int): Review
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
