var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    // phone: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
