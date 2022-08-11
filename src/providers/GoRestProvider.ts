import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";

class GoRestProvider {

  async findById(id: string): Promise<UserEntity> {
    const { data } = await http.get(`/users/${id}`)
    return data
  }

  async findAll(): Promise<Array<UserEntity>> {
    const { data } = await http.get(`/users`)
    return data
  }

  async create(value: any): Promise<string> {
    const { data } = await http.post('/users', value)
    return data.id
  }
}

export { GoRestProvider }