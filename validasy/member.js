/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


const { User } = require("../models/user");
const { validateMember } = require("./validation");
const bcrypt = require("bcrypt");


const getMember = async (req, res) => {
  const member = await User.findById(req.body.id);
  if (!member) return res.status(404).send("Member tydack ditemukan");

  res.send(member);
};


module.exports = {
  getMember
};
