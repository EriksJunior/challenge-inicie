import { Request, Response } from 'express'

import { UserService } from "../services/UserService"

export class UserController{
  #userService: UserService
  constructor(userService: UserService){
    this.#userService = userService
  }

  async searchUser(req: Request, res: Response):Promise<Response>{
    const id = await this.#userService.searchUser()
    console.log(id)
    return res.status(200).json({id: id})
  }
}