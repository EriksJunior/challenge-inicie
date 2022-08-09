import Joi from "joi";

const userValidate = Joi.object({
  name: Joi.string().required().messages({ 'string.empty': 'the name cannot be empty' }),
  email: Joi.string().required().email().messages({ 'string.empty': 'the email cannot be empty' }).rule({ message: 'the email must be a valid email' }),
  gender: Joi.string().required().valid('male', 'female').messages({ 'string.empty': 'the gender cannot be empty', 'any.only': 'fill with male or female' }),
  status: Joi.string().required().valid('active', 'inactive').messages({ 'string.empty': 'the status cannot be empty', 'any.only': 'fill with active or inactive' })
}).options({ abortEarly: false })

export { userValidate }