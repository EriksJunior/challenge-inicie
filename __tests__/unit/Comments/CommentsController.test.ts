
import request from 'supertest'
import app from '../../../src/app'

import { CommentsEntity } from '../../../src/entities/CommentsEntity'

describe('Create a comments', () => {
  const mockPostData: CommentsEntity = {
    post_id: 1,
    name: "test",
    email: "trest@teste7658.com",
    body: "testttttttttttt"
  }

  const mockPostDataFromFistPost: CommentsEntity = {
    name: "test",
    email: "trest@teste7658.com",
    body: "test post public list"
  }

  it('Must be able to creates a new comment', async () => {
    const res = await request(app)
      .post('/comments/createcomment')
      .send(mockPostData)

    expect(res.status).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })

  it('Must be able to creates a new comment in the first post in list public', async () => {
    const res = await request(app)
      .post('/comments/createcommentinfistpostpublic')
      .send(mockPostDataFromFistPost)

    expect(res.status).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })

  it('Must be able to find comments by public post id', async () => {
    const idPost = 1

    const res = await request(app)
      .get(`/comments/findcommentsbypublicpostid/${idPost}`)

    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expect.arrayContaining([]))
  })

  it('Must be able to delete comment by id', async () => {
    const idComment = 1928

    const res = await request(app)
      .delete(`/comments/deletecomment/${idComment}`)

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
})