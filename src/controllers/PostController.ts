import { Request, Response } from "express";
import { PostService } from "../services/PostService";
export class PostController {
  #postService: PostService
  constructor(postService: PostService) {
    this.#postService = postService
  }

  async createsAuserPost(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const id = await this.#postService.createsAuserPost(data)

      return res.status(201).json({ id: id })
    } catch (error: any) {
      return res.status(error.response?.status ? error.response.status : 400).json({ erro: error.message ? error.message : error })
    }
  }

  async findPostByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const result = await this.#postService.findPostByUserId(id)

      return res.status(200).json({ post: result })
    } catch (error: any) {
      return res.status(404).json({ erro: error.message })
    }
  }
}