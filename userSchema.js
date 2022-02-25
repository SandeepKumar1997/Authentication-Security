const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// const encrypt = require("mongoose-encryption");

const User = new mongoose.Schema({
  username: {
    type: String,
    unique: false,
  },
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model("userdetails", User);
