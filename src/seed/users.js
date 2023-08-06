// const User = require("../modules/users/Users");

const data = [
  {
    first_name: "Sherozbek",
    last_name: "Baxtiyorov",
    email: "baxtiyorovsherozbek1111@gmail.com",
    isAdmin: true,
    image: "files/user/myPhoto.jpg",
    haveStar: true,
    username: "sherozbek.17",
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
