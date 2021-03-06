//Validation
const Joi = require('@hapi/joi');

//Register validation
const registerValidation = data =>  {
    const schema = {
        name: Joi.string()
        .min(6)
        .required(),
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    };
    return Joi.Validate(data, schema);
};

const logingValidation = data =>  {
    const schema = { 
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    };
    return Joi.Validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = logingValidation;
