import http from "../config/baseUrl";

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

  async findById(id: string): Promise<UserEntity> {
    return await this.#goRestProvider.findById(id)
  }

  async findAll(): Promise<Array<UserEntity>> {
    return await this.#goRestProvider.findAll()
  }

  async create(value: UserEntity): Promise<string> {
    const user = new UserEntity(value)

    const checkEmailAlreadyExists = await this.#goRestProvider.findAll()

    const emailExists = checkEmailAlreadyExists.find(e => e.email === user.email)

    if (emailExists)
      throw new Error('this user email is already in use')

    const validationResult = await this.#userValidate.validate(user)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    return await this.#goRestProvider.create(user)
  }
}