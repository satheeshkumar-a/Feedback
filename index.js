const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
