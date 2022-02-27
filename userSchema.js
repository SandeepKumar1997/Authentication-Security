const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
var findOrCreate = require('mongoose-findorcreate')
// const encrypt = require("mongoose-encryption");

const User = new mongoose.Schema({
  username: {
    type: String,
    unique: false,
  },
  googleId:String,
  githubId:String
});

User.plugin(passportLocalMongoose);
User.plugin(findOrCreate);


module.exports = mongoose.model("userdetails", User);
