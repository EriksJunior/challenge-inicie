import { Request, Response } from "express";

export class CommentsController {
  async createComments(req: Request, res: Response) {
    try {

    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }
}