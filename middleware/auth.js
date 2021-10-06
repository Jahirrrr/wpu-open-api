/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


const jwt = require("jsonwebtoken");
const jwtPrivateKey  = "MASUKAN PRIVATE KEY"
const {User} = require("../models/user");

module.exports = async function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Hayooooo mau ngapain?");

  try {
    const decoded = jwt.verify(token, jwtPrivateKey);
    const { _id } = decoded;
    req.user = await User.findById(_id);
    next();
  } catch (ex) {
    return res.status(400).send("Token salah");
  }
};
