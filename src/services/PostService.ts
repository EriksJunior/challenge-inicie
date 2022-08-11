import { PostEntity } from "../entities/PostEntity";
import { GoRestProvider } from "../providers/GoRestProvider";
export class PostService {
  #goRestProvider: GoRestProvider

  constructor(goRestProvider: GoRestProvider) {
    this.#goRestProvider = goRestProvider
  }

  async createPost(value: PostEntity): Promise<string> {
    const post = new PostEntity(value)

    return await this.#goRestProvider.createPost(post)
  }
}