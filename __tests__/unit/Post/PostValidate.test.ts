import Joi from "joi";
import { matchers } from "jest-joi";
import { PostEntity } from "../../../src/entities/PostEntity";

expect.extend(matchers);

describe('validate a user', () => {

  const mockPostData: PostEntity = {
    user_id: '1776',
    title: 'title test',
    body: 'body test'
  }

  it('post is valid', () => {
    const validationResult = Joi.object({
      id: Joi.string(),
      user_id: Joi.alternatives().try(Joi.string(), Joi.number()).required().messages({ 'string.empty': 'the user_id cannot be empty' }),
      title: Joi.string().required().messages({ 'string.empty': 'the title cannot be empty' }),
      body: Joi.string().required().messages({ 'string.empty': 'the body cannot be empty' }),
    }).options({ abortEarly: false })

    expect(mockPostData).toMatchSchema(validationResult)
  })

})