/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const member = require("../validasy/member");

router.post("/details", auth, member.getMember);

module.exports = router;
