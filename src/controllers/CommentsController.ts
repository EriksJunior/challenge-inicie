import { Request, Response } from "express";
import { CommentsService } from "../services/CommentsService";
export class CommentsController {
  #commentsService: CommentsService

  constructor(commentsService: CommentsService) {
    this.#commentsService = commentsService
  }

  async createCommentOnPost(req: Request, res: Response) {
    try {
      const data = req.body

      const id = await this.#commentsService.createCommentOnPost(data)

      return res.status(201).json({ id: id })
    } catch (error: any) {
      return res.status(error.response?.status ? error.response.status : 400).json({ erro: error.message ? error.message : error })
    }
  }

  async createFirstCommentInPublicPostList(req: Request, res: Response) {
    try {
      const data = req.body

      const id = await this.#commentsService.createFirstCommentInPublicPostList(data)

      return res.status(201).json({ id: id })
    } catch (error: any) {
      return res.status(error.response?.status ? error.response.status : 400).json({ erro: error.message ? error.message : error })
    }
  }

  async findCommentsByPublicPostId(req: Request, res: Response) {
    try {
      const { id } = req.params

      const result = await this.#commentsService.findCommentsByPublicPostId(id)

      return res.status(200).json({ comments: result })
    } catch (error: any) {
      return res.status(error)
    }
  }

  async deleteComment(req: Request, res: Response) {
    try {
      const { id } = req.params

      await this.#commentsService.deleteComment(id)
      
      return res.status(200).json({ message: 'comment deleted' })
    } catch (error: any) {
      return res.status(error)
    }
  }
}