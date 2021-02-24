var { Schema, model } = require("mongoose");

var userSchema = Schema({
  username: { type: "String", required: true, unique: true },
  email: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
  active: "Boolean",
});

module.exports = model("User", userSchema);
