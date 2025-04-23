const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Profile", ProfileSchema);