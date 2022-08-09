import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
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
    console.log(validationResult.error)
    if (validationResult.error){
     throw new Error(`${validationResult.error}`)
    }

    // const { data } = await http.post('/users', user)
    // return data
  }
}