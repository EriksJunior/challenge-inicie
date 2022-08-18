import { UserEntity } from "../entities/UserEntity";
import { UserValidate } from "../validators/UserValidate";
import { GoRestProvider } from "../providers/GoRestProvider";

import JoiErrorHandlingJoi from "../utils/exceptions/JoiErrorHandlingJoi";
export class UserService {
  #goRestProvider: GoRestProvider
  #userValidate: typeof UserValidate

  constructor(goRestProvider: GoRestProvider, userValidate: typeof UserValidate) {
    this.#goRestProvider = goRestProvider
    this.#userValidate = userValidate
  }

  async findUserById(id: string | number): Promise<UserEntity> {
    return await this.#goRestProvider.findUserById(id)
  }

  async findUserAll(): Promise<Array<UserEntity>> {
    return await this.#goRestProvider.findUserAll()
  }

  async createUser(value: UserEntity): Promise<object> {
    const user = new UserEntity(value)

    const validationResult = this.#userValidate.validate(user)
    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    const checkEmailAlreadyExists = await this.#goRestProvider.findUserAll()

    const emailExists = checkEmailAlreadyExists.find(e => e.email === user.email)
    
    if (emailExists)
      throw new Error('this user email is already in use')

    const id = await this.#goRestProvider.createUser(user)
    return {id}
  }
}