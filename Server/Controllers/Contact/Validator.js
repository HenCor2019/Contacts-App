const joi = require("joi");

const validator = {
  contactValidator: (data) => {
    const validateContact = joi.object({
      name: joi.string().max(15).required(),
      number: joi.string().pattern(new RegExp("^[0-9]{8}$")),
      email: joi.string().email(),
      author: joi.string(),
    });

    return validateContact.validateAsync(data);
  },
};

module.exports = validator;
