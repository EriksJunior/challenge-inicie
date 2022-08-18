import Joi from "joi";
import { matchers } from "jest-joi";
import { CommentsEntity } from "../../../src/entities/CommentsEntity";

expect.extend(matchers);

describe('validate a user', () => {

  const mockPostData: CommentsEntity = {
    post_id: 1,
    name: "test123",
    email: "trest@123.com",
    body: "testttttttttttt"
  }

  it('post is valid', () => {
    const validationResult = Joi.object({
      id: Joi.string(),
      post_id: Joi.alternatives().try(Joi.string(), Joi.number()).required().messages({ 'string.empty': 'the post_id cannot be empty' }),
      name: Joi.string().required().messages({ 'string.empty': 'the name cannot be empty' }),
      email: Joi.string().required().email().messages({ 'string.empty': 'the email cannot be empty' }).rule({ message: 'the email must be a valid email' }),
      body: Joi.string().required().messages({ 'string.empty': 'the body cannot be empty' })
    }).options({ abortEarly: false })

    expect(mockPostData).toMatchSchema(validationResult)
  })

})