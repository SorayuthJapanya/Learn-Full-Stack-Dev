const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();
connectDB();

PORT = process.env.PORT;

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
