const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User{
    _id: ID
    firstName: String
    lastName: String
    username:String
    email:String
    district:String
    usertype:String
    review:[Review]
    comment:[Comment]
    friends:[User]
}
type Auth{
    token: ID
    user:User
}
type Comment{
    _id:ID
    commentBody:String
    createdAt:String
    username:String
    replyCount:Int
    reply:[Reply]
}
type Reply{
    _id:ID
    replyBody:String
    createdAt:String
    username:String
}
type Review{
    _id:ID
    username:
    implementationMonth:String
    implementationYear:Int
    differentiation:Int
    assessments:Int
    technology:Int
    lessonDesign:Int
    professionalDevelopment:Int
    support:Int
    overall:Int
    reviewBody:String
    product:[Product]
}
`;
