const mongoose = require("mongoose");
const isUUID = require("is-uuid");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => isUUID.v4(v),
      message: props => `${props.value} is not a valid userId!`
    }
  },
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
