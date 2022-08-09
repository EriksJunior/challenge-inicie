import { Request, Response } from 'express'

import { UserService } from "../services/UserService"

export class UserController {
  #userService: UserService
  constructor(userService: UserService) {
    this.#userService = userService
  }

  async fyndById(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.body
      const result = await this.#userService.fyndById(user)

      return res.status(200).json({ users: result })
    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const result = await this.#userService.create(data)

      return res.status(200).json({ user: result })
    } catch (error: any) {
      return res.status(400).json({ erro: error })
    }
  }
}