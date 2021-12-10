import Joi from "joi";

const employeeValidation = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    area: Joi.number().required(),
}).strict();

const employeeIdValidation = Joi.object({
    id: Joi.string().length(24).hex().required(),
});

export {
    employeeValidation,
    employeeIdValidation
}