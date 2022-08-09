import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
import JoiErrorHandlingJoi from "../utils/exceptions/JoiErrorHandlingJoi";
import { userValidate } from "../validators/UserValidate";
export class UserService {

  async fyndById(id: any) {
    const { data } = await http.get('/users')
    console.log(id)
    return data
  }

  async create(value: UserEntity) {
    const user = new UserEntity(value)

    const validationResult = await userValidate.validate(user)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    const { data } = await http.post('/users', user)
    return data
  }
}