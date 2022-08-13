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

  async createsApostComment(value: CommentsEntity): Promise<string> {
    const comment = new CommentsEntity(value)

    const validationResult = await this.#commentsValidate.validate(comment)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    return await this.#goRestProvider.createsApostComment(comment)
  }
}