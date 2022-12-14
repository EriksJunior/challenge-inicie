import http from "../config/baseUrl";

import { UserEntity } from "../entities/UserEntity";
import { PostEntity } from "../entities/PostEntity";
import { CommentsEntity } from "../entities/CommentsEntity";
import axios from "axios";

class GoRestProvider {

  async findUserById(id: string | number): Promise<UserEntity> {
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

  async searchForTheLatest(): Promise<Array<PostEntity>> {
    const { data } = await axios.get('https://gorest.co.in/public/v2/posts')
    return data
  }

  async findTotalPostPublicListPages(): Promise<number | string> {
    const data = await axios.get('https://gorest.co.in/public/v2/posts')
    return data.headers['x-pagination-pages']
  }

  async findPostsFromPublicListPerPage(page: number): Promise<Array<PostEntity>> {
    const { data } = await axios.get(`https://gorest.co.in/public/v2/posts?page=${page}`)
    return data
  }

  async createCommentOnPost(value: CommentsEntity): Promise<string> {
    const { data } = await http.post(`/posts/${value.post_id}/comments`, value)
    return data.id
  }

  async createCommentTheFirstPostInListPublic(value: CommentsEntity): Promise<string> {
    const { data } = await http.post('/comments', value)
    return data.id
  }

  async findCommentsByPublicPostId(id: number | string): Promise<Array<PostEntity>> {
    const { data } = await http.get(`/posts/${id}/comments`)
    return data
  }

  async deleteComment(id: string | number) {
    const result = await http.delete(`https://gorest.co.in/public/v2/comments/${id}`)
    return result
  }

}

export { GoRestProvider }