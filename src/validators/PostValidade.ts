import Joi from "joi";

const PostValidade = Joi.object({
  id: Joi.string(),
  user_id: Joi.alternatives().try(Joi.string(), Joi.number()).required().messages({ 'string.empty': 'the user_id cannot be empty' }),
  title: Joi.string().required().messages({ 'string.empty': 'the title cannot be empty' }),
  body: Joi.string().required().messages({ 'string.empty': 'the body cannot be empty' }),
}).options({ abortEarly: false })

export { PostValidade }