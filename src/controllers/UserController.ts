import { Request, Response } from 'express'

import { UserService } from "../services/UserService"

export class UserController {
  #userService: UserService
  constructor(userService: UserService) {
    this.#userService = userService
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const id = await this.#userService.create(data)

      return res.status(201).json({ id: id })
    } catch (error: any) {
      return res.status(error.response?.status ? error.response.status : 400).json({ erro: error.message ? error.message : error })
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const result = await this.#userService.findById(id)

      return res.status(200).json({ user: result })
    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.#userService.findAll()

      return res.status(200).json({ users: result })
    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }
}