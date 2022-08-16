import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
import { PostEntity } from "../entities/PostEntity";
import { CommentsEntity } from "../entities/CommentsEntity";

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

  async createsAuserPost(value: PostEntity): Promise<string> {
    const { data } = await http.post(`/users/${value.user_id}/posts`, value)
    return data.id
  }

  async findPostByUserId(id: string): Promise<Array<PostEntity>> {
    const { data } = await http.get(`/users/${id}/posts`)
    return data
  }
  
  async getAllPostsFromPublicList(): Promise<Array<PostEntity>> {
    const { data } = await http.get('https://gorest.co.in/public/v2/posts')
    return data
  }

  async createCommentOnPost(value: CommentsEntity): Promise<string> {
    const { data } = await http.post(`/posts/${value.post_id}/comments`, value)
    return data.id
  }


  async createFirstCommentInPublicPostList(value: CommentsEntity): Promise<string> {
    const { data } = await http.post('https://gorest.co.in/public/v2/comments', value)
    return data.id
  }

  async deleteComment(id: string) {
    await http.delete(`https://gorest.co.in/public/v2/comments/${id}`)
  }

}

export { GoRestProvider }