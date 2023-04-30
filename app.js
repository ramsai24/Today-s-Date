const express = require("express");
const app = express();

const date = new Date();
console.log(date);

let requireFormat = `${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;
console.log(requireFormat);

app.get("/", (request, response) => {
  response.send(requireFormat);
});

module.exports = app;

app.listen(3000, () => {
  console.log("Server Running at localhost:3000");
});
