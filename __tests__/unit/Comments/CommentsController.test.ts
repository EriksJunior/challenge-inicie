
import request from 'supertest'
import app from '../../../src/app'

describe('Create a comments', () => {
  const mockPostData = {
    post_id: 1,
		name: "test",
		email: "trest@teste7657.com",
		body: "testttttttttttt"
  }

  it('Must be able to creates a new comment', async () => {
    const res = await request(app)
      .post('/comments/createcomment')
      .send(mockPostData)

    expect(res.status).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })
})