const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

// middlware
app.use(express.json());
app.use(cookieParser());

const PORT = 3000;

app.get("/hello", (req, res) => {
  const { username } = req.cookies;

  if (username) {
    res.status(200).send(`Welcome ${username}!`);
  } else {
    res.status(401).send("Unauthenticated");
  }
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  res.cookie("username", username);
  res.status(200).send("Login successful");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
