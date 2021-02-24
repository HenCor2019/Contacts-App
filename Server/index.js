require("dotenv").config();

const http = require("http");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
var useRoutes = require("./Routes/User.router");
var contactRoutes = require("./Routes/Contact.router");

const app = express();

const PORT = process.env.PORT || 5000;

app.set("port", PORT);

var server = http.createServer(app);
server.listen(PORT);

server.on("error", (e) => {
  console.error(e);
});

server.on("listening", () => {
  console.log(`Listening on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());
app.use("/users", useRoutes);
app.use("/contacts", contactRoutes);
