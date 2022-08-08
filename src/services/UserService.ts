import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
export class UserService {

  async fyndById(id: any) {
    const { data } = await http.get('/users')
    console.log(id)
    return data
  }

  async create(user: UserEntity) {
    const result = new UserEntity(user)
    
    const { data } = await http.post('/users', result)
    return data
  }
}