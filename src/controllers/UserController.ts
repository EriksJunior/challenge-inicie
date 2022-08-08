import { Request, Response } from 'express'

import { UserService } from "../services/UserService"

export class UserController {
  #userService: UserService
  constructor(userService: UserService) {
    this.#userService = userService
  }

  async searchUser(req: Request, res: Response): Promise<Response> {
    try {
      const id = await this.#userService.searchUser()
      console.log(id)
      return res.status(200).json({ id: id })
    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }
}