import { CommentsEntity } from "../entities/CommentsEntity"
import { GoRestProvider } from "../providers/GoRestProvider"
import { CommentsValidate } from "../validators/CommentsValidate"

import JoiErrorHandlingJoi from "../utils/exceptions/JoiErrorHandlingJoi"
import { PostEntity } from "../entities/PostEntity"

export class CommentsService {
  #goRestProvider: GoRestProvider
  #commentsValidate: typeof CommentsValidate

  constructor(goRestProvider: GoRestProvider, commentsValidate: typeof CommentsValidate) {
    this.#commentsValidate = commentsValidate
    this.#goRestProvider = goRestProvider
  }

  async createCommentOnPost(value: CommentsEntity): Promise<string> {
    const comment = new CommentsEntity(value)

    const validationResult = await this.#commentsValidate.validate(comment)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    return await this.#goRestProvider.createCommentOnPost(comment)
  }

  async createFirstCommentInPublicPostList(value: CommentsEntity): Promise<string> {
    const allPosts = await this.#goRestProvider.getAllPostsFromPublicList()
    const fistPost = allPosts[allPosts.length - 1]

    console.log(allPosts)

    const comment = new CommentsEntity({ ...value, post_id: fistPost.id })

    const validationResult = await this.#commentsValidate.validate(comment)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    return await this.#goRestProvider.createFirstCommentInPublicPostList(comment)
  }

  async deleteComment(value: string){
    await this.#goRestProvider.deleteComment(value)
  }
}