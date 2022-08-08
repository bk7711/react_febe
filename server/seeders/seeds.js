const db = require("../config/connection");
const { User, Review, Product, Comment } = require("../models");

db.once("open", async () => {
  await Product.deleteMany({});

  const product = await Product.insertMany([
    {
      title: "Go Math",
      publisher: "Houghton Mifflin Harcourt",
      copyright: 2022,
      subject: "Math",
      gradeBand: "K-6",
    },
    {
      title: "My Math",
      publisher: "McGraw",
      copyright: 2021,
      subject: "Math",
      gradeBand: "K-8",
    },
  ]);
  console.log("products seeded");

  await User.deleteMany();

  await User.create([
    {
      firstName: "Sarea",
      lastName: "Johnson",
      username: "sjohnson",
      email: "sjohnson@test.com",
      password: "password",
      district: "Orange School District",
      usertype: "Teacher",
    },
  ]);
  console.log("user seeded");

  await Comment.deleteMany();

  await Comment.create([
    {
      username: "sjohnson",
      commentBody:
        "I'm glad that they brought back the program but am disappointed that there aren't many changes. I expected a huge upgrade",
      hashtags: ["#gomath #womp"],
    },
  ]);
  console.log("comments seeded");

  process.exit();
});
