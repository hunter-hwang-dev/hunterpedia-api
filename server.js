import express from "express";
const app = express();

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.send("로그인 페이지");
});
