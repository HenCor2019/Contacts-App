const joi = require("joi");

const validator = {
  registerValidator: (data) => {
    const validateRegister = joi.object({
      username: joi.string().min(6).required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    return validateRegister.validateAsync(data);
  },
  loginValidator: (data) => {
    const validateLogin = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    return validateLogin.validateAsync(data);
  },
};

module.exports = validator;
