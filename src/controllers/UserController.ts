import { Request, Response } from 'express'

import { UserService } from "../services/UserService"

export class UserController {
  #userService: UserService
  constructor(userService: UserService) {
    this.#userService = userService
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      const id = await this.#userService.createUser(data)

      return res.status(201).json({ id: id })
    } catch (error: any) {
      return res.status(error.response?.status ? error.response.status : 400).json({ erro: error.message ? error.message : error })
    }
  }

  async findUserById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const result = await this.#userService.findUserById(id)

      return res.status(200).json({ user: result })
    } catch (error: any) {
      return res.status(404).json({ erro: error.message })
    }
  }

  async findUserAll(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.#userService.findUserAll()

      return res.status(200).json({ users: result })
    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }
}