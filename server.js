// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbApp);

//------------------------------------------------------------

import express from "express";
const app = express();

app.use(express.static(__dirname + "/public")); //static - public 폴더 등록

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.send("로그인 페이지");
});
