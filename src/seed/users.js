// const User = require("../modules/users/Users");

const data = [
  {
    first_name: "Sherozbek",
    last_name: "Baxtiyorov",
    email: "baxtiyorovsherozbek1111@gmail.com",
    isAdmin: true,
    haveStar: true,
    username: "sherozbek.17",
    password: "1234",
  },
  {
    first_name: "Azizbek",
    last_name: "Nosirov",
    email: "Azizbek111@gmail.com",
    username: "Azizbek.00",
    password: "1234",
  },
  {
    first_name: "Madina",
    last_name: "Komilova",
    email: "Madina111@gmail.com",
    username: "madina.00",
    password: "1234",
  },
  {
    first_name: "Komiljin",
    last_name: "Xurshidov",
    email: "komil@gmail.com",
    username: "komil11.00",
    password: "1234",
  },
];

// const seedUsers = async () => {
//   await User.insertMany(...data);

//   return "Added 2 users.";
// };

// seedUsers();

const mongoose = require("mongoose");
const User = require("../modules/users/Users");

async function seedData() {
  const uri = "mongodb://127.0.0.1:27017/social-network";
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

  const seedDB = async () => {
    await User.insertMany(data);
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });
}

seedData();
