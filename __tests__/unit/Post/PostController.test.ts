
import request from 'supertest'
import app from '../../../src/app'

import { PostEntity } from '../../../src/entities/PostEntity'

describe('creates a user post', () => {
  const mockPostData: PostEntity = {
    user_id: '3720',
    title: 'title test',
    body: 'body test'
  }

  it('Must be able to creates a new user post', async () => {
    const res = await request(app)
      .post('/post/createpost')
      .send(mockPostData)

    expect(res.status).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })

  it('Must be able to find posts by user id', async () => {
    const res = await request(app)
      .get(`/post/findpostbyuserid/${mockPostData.user_id}`)

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('post')
  })

  it('Must be able to find all posts from public list', async () => {
    const res = await request(app)
      .get(`/post/searchforthelatest`)

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('posts')
  })
})