import { Request, Response } from "express";
import { CommentsService } from "../services/CommentsService";
export class CommentsController {
  #commentsService: CommentsService

  constructor(commentsService: CommentsService) {
    this.#commentsService = commentsService
  }

  async createsApostComment(req: Request, res: Response) {
    try {
      const data = req.body

      const id = await this.#commentsService.createsApostComment(data)
      return res.status(201).json({ id: id })
    } catch (error: any) {
      return res.status(error.response?.status ? error.response.status : 400).json({ erro: error.message ? error.message : error })
    }
  }
}