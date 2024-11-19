import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

//------------------------------------------------------------

import express from "express";
const server = express();

server.use(express.static(__dirname + "/public")); //static - public 폴더 등록

server.listen(8080, () => {
  console.log("http://localhost:8080");
});

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/login", (req, res) => {
  res.send("로그인 페이지");
});
