import Joi from "joi";

const CommentsValidate = Joi.object({
  id: Joi.string(),
  post_id: Joi.string().required().messages({ 'string.empty': 'the post_id cannot be empty' }),
  name: Joi.string().required().messages({ 'string.empty': 'the name cannot be empty' }),
  email: Joi.string().required().email().messages({ 'string.empty': 'the email cannot be empty' }).rule({ message: 'the email must be a valid email' }),
  body: Joi.string().required().messages({ 'string.empty': 'the body cannot be empty' })
}).options({ abortEarly: false })

export { CommentsValidate }