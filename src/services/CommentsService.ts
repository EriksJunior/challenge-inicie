import { CommentsEntity } from "../entities/CommentsEntity"
import { GoRestProvider } from "../providers/GoRestProvider"
import { CommentsValidate } from "../validators/CommentsValidate"

import JoiErrorHandlingJoi from "../utils/exceptions/JoiErrorHandlingJoi"

export class CommentsService {
  #goRestProvider: GoRestProvider
  #commentsValidate: typeof CommentsValidate

  constructor(goRestProvider: GoRestProvider, commentsValidate: typeof CommentsValidate) {
    this.#commentsValidate = commentsValidate
    this.#goRestProvider = goRestProvider
  }

  async createCommentOnPost(value: CommentsEntity): Promise<object> {
    const comment = new CommentsEntity(value)

    const validationResult = await this.#commentsValidate.validate(comment)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    const id = await this.#goRestProvider.createCommentOnPost(comment)

    return { id }
  }

  async createCommentTheFirstPostInListPublic(value: CommentsEntity): Promise<object> {
    const totalsPage = await this.#goRestProvider.findTotalPostPublicListPages()

    const fisPosts = await this.#goRestProvider.findPostsFromPublicListPerPage(totalsPage as number)

    const fistPost = fisPosts[fisPosts.length - 1]

    const comment = new CommentsEntity({ ...value, post_id: fistPost.id })

    const validationResult = this.#commentsValidate.validate(comment)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    const id = await this.#goRestProvider.createCommentTheFirstPostInListPublic(comment)

    return { id }
  }

  async findCommentsByPublicPostId(value: string | number) {
    return await this.#goRestProvider.findCommentsByPublicPostId(value)
  }

  async deleteComment(value: string | number) {
    return await this.#goRestProvider.deleteComment(value)
  }
}