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

  async createsAuserPost(value: PostEntity): Promise<object> {
    const post = new PostEntity(value)

    const validationResult = this.#postValidade.validate(post)

    if (validationResult.error)
      throw JoiErrorHandlingJoi.JoiErrorHandling(validationResult.error.details)

    const id = await this.#goRestProvider.createsAuserPost(post)
    return { id }
  }

  async findPostByUserId(id: string): Promise<Array<object>> {
    const userPosts = await this.#goRestProvider.findPostByUserId(id)

    if (userPosts.length < 1)
      throw new Error('no posts by this user were found')

    return userPosts
  }

  async searchForTheLatest(): Promise<Array<object>> {
    const userPosts = await this.#goRestProvider.searchForTheLatest()

    if (userPosts.length < 1)
      throw new Error('no public list post found')

    return userPosts
  }

}