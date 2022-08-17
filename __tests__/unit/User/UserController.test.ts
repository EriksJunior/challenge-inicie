
import request from 'supertest'
import app from '../../../src/app'

describe('create user controller', () => {

  it('Must be able to create a new user', async () => {
    const res = await request(app)
      .post('/user/createuser')
      .send({
        name: 'User Test',
        email: 'usertest@test6.com',
        gender: 'male',
        status: 'active'
      })

    expect(res.status).toEqual(201)
    expect(res.body).toHaveProperty('id')
  })

  it('It should not be possible to create a user with an existing email', async () => {
    const res = await request(app)
      .post('/user/createuser')
      .send({
        name: 'User Test existing',
        email: 'usertest@test2existing.com',
        gender: 'male',
        status: 'active'
      })

    expect(res.status).toEqual(400)
  })

  it('Must be able to find all users', async () => {
    const res = await request(app).get('/user/finduserall')

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('users')
  })


  it('Must be able to find user by id', async () => {
    const res = await request(app).get(`/user/finduserbyid/${1876}`)

    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('user')
  })
})