import Joi from "joi";

const userValidate = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email().rule({ message: 'the email cannot be empty and must be a valid email' }),
  gender: Joi.string().required().valid('male', 'female'),
  status: Joi.string().required().valid('active', 'inactive')
}).options({ abortEarly: false })

export { userValidate }