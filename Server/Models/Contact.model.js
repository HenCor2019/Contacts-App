var { Schema, model } = require("mongoose");

var contactSchema = Schema({
  name: { type: "String", required: true },
  number: { type: "String", required: false },
  email: { type: "String", required: false },
  author: { type: Schema.ObjectId, ref: "User" },
});

module.exports = model("Contact", contactSchema);
