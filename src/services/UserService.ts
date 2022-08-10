import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
import { UserValidate } from "../validators/UserValidate";
import { UserRepo } from "../repositories/UserRepo";

import JoiErrorHandlingJoi from "../utils/exceptions/JoiErrorHandlingJoi";
export class UserService {
  #userRepo: UserRepo
  #userValidate: typeof UserValidate

  constructor(userRepo: UserRepo, userValidate: typeof UserValidate) {
    this.#userRepo = userRepo
    this.#userValidate = userValidate
  }

  async findById(id: string): Promise<string> {
    return await this.#userRepo.findById(id)
  }

  async findAll(): Promise<Array<object>> {
    return await this.#userRepo.findAll()
  }

  async create(value: UserEntity): Promise<string> {
    const user = new UserEntity(value)

    const validationResult = await this.#userValidate.validate(user)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    return await this.#userRepo.create(user)
  }
}