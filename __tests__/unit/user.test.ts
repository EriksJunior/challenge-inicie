import Joi from "joi";
import { matchers } from "jest-joi";
expect.extend(matchers);



import { UserService } from "../../src/services/UserService"
import { UserValidate } from '../../src/validators/UserValidate'
import { UserEntity } from '../../src/entities/UserEntity'

import { GoRestProvider } from '../../src/providers/GoRestProvider'

const mockUserData = {
  name: 'User Test',
  email: 'usertest@test.com',
  gender: 'female',
  status: 'active'
}

describe('create user', () => {
  test('user is valid', () => {

    const validationResult = Joi.object({
      id: Joi.string(),
      name: Joi.string().required().messages({ 'string.empty': 'the name cannot be empty' }),
      email: Joi.string().required().email().messages({ 'string.empty': 'the email cannot be empty' }).rule({ message: 'the email must be a valid email' }),
      gender: Joi.string().required().valid('male', 'female').messages({ 'string.empty': 'the gender cannot be empty', 'any.only': 'fill with male or female' }),
      status: Joi.string().required().valid('active', 'inactive').messages({ 'string.empty': 'the status cannot be empty', 'any.only': 'fill with active or inactive' })
    }).options({ abortEarly: false })

    expect(mockUserData).toMatchSchema(validationResult)
  })
})