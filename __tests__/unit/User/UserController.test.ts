
import request from 'supertest'
import app from '../../../src/app'

describe('create user controller', () => {
  const mockUserData = {
    name: 'User Test',
    email: 'usertest@test60.com',
    gender: 'male',
    status: 'active'
  }

  it('Must be able to create a new user', async () => {
    const res = await request(app)
      .post('/user/createuser')
      .send(mockUserData)

    expect(res.status).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })

  it('It should not be possible to create a user with an existing email', async () => {
    const res = await request(app)
      .post('/user/createuser')
      .send(mockUserData)

    expect(res.status).toEqual(400)
  })

  it('Must be able to find all users', async () => {
    const res = await request(app).get('/user/finduserall')

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('users')
  })


  it('Must be able to find user by id', async () => {
    const id = 1876
    const res = await request(app).get(`/user/finduserbyid/${id}`)

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('user')
  })
})