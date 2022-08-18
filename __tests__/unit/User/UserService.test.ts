import { UserService } from "../../../src/services/UserService"
import { GoRestProvider } from "../../../src/providers/GoRestProvider"
import { UserValidate } from "../../../src/validators/UserValidate"
import { UserEntity } from "../../../src/entities/UserEntity"

describe("Create a user", () => {
  const goRestProvider = new GoRestProvider()
  const userService = new UserService(goRestProvider, UserValidate)

  const mockUserData: UserEntity = {
    name: 'User Test',
    email: 'usertest@test61.com',
    gender: 'male',
    status: 'active'
  }


  it('Must be able to create a new user', async () => {
    const id = await userService.createUser(mockUserData)
    expect(id).toHaveProperty('id')
  })

  it('It should not be possible to create a user with an existing email', async () => {
    await expect(userService.createUser(mockUserData)).rejects.toEqual(
      new Error('this user email is already in use')
    )
  })

  it('Must be able to find all users', async () => {
    const users = await userService.findUserAll()

    expect(users).toEqual(expect.arrayContaining([]))
  })

  it('Must be able to find user by id', async () => {
    const id = 1876

    const user = await userService.findUserById(id)

    expect(user).toStrictEqual(
      expect.objectContaining({
        id: expect.any(Number || String),
        name: expect.any(String),
        email: expect.any(String),
        gender: expect.any(String),
        status: expect.any(String)
      }),
    );
  })

})