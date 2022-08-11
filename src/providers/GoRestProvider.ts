import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
import { PostEntity } from "../entities/PostEntity";

class GoRestProvider {

  async findUserById(id: string): Promise<UserEntity> {
    const { data } = await http.get(`/users/${id}`)
    return data
  }

  async findUserAll(): Promise<Array<UserEntity>> {
    const { data } = await http.get(`/users`)
    return data
  }

  async createUser(value: UserEntity): Promise<string> {
    const { data } = await http.post('/users', value)
    return data.id
  }

  async createPost(value: PostEntity): Promise<string> {
    const { data } = await http.post('/posts', value)
    return data.id
  }
}

export { GoRestProvider }