import { Request, Response } from "express";
import { PostService } from "../services/PostService";
export class PostController {
  #postService: PostService
  constructor(postService: PostService) {
    this.#postService = postService
  }

  async createPost(req: Request, res: Response) {
    try {
      const data = req.body
      const id = await this.#postService.createPost(data)

      return res.status(200).json({id: id})
    } catch (error: any) {
      return res.status(400).json({ erro: error.message })
    }
  }
}