const {
  register,
  postRegister,
  login,
  postLogin,
  logout,
} = require("../controller/authController");

const express = require("express");

const authrouter = express.Router();

authrouter.get("/register", register);
authrouter.post("/register", postRegister);
authrouter.get("/login", login);
authrouter.post("/login", postLogin);
authrouter.get("/logout", logout);

module.exports = authrouter;
