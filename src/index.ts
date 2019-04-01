import express from "express";

const app = express();

app.use(function(req, res, next) {
  console.log(`Request: ${req.path}`);
  next();
});

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/todos", function(req, res) {
  const todosJson = require("../assets/todo.json");
  res.json(todosJson);
});

app.get("/todo/:id", function(req, res) {
  throw new Error("Implement me");
});

console.log("Server starting");
app.listen(3000, () => {
  console.log("Server started");
});
