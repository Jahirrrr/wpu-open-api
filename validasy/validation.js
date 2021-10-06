/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

function validateSignup(user) {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(5).max(255).required(),
    category: Joi.string().required(),
  });
  return schema.validate(user);
}
function validateSignin(user) {
  const schema = Joi.object({
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
}

function validateMember(member) {
  const schema = Joi.object({
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(5).required(),
    apiId: Joi.objectId().required(),
    link: Joi.any(),
  });
  return schema.validate(member);
}


module.exports = {
  validateSignin,
  validateSignup,
  validateMember,
};
