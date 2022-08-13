import { PostEntity } from "../entities/PostEntity";
import { GoRestProvider } from "../providers/GoRestProvider";
import { PostValidade } from "../validators/PostValidade";

import JoiErrorHandlingJoi from "../utils/exceptions/JoiErrorHandlingJoi";
export class PostService {
  #goRestProvider: GoRestProvider
  #postValidade: typeof PostValidade

  constructor(goRestProvider: GoRestProvider, postValidade: typeof PostValidade) {
    this.#goRestProvider = goRestProvider
    this.#postValidade = postValidade
  }

  async createAuserPost(value: PostEntity): Promise<string> {
    const post = new PostEntity(value)

    const validationResult = await this.#postValidade.validate(post)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    return await this.#goRestProvider.createAuserPost(post)
  }
}