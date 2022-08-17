import { UserService } from "../../../src/services/UserService"
import { GoRestProvider } from "../../../src/providers/GoRestProvider"
import { UserValidate } from "../../../src/validators/UserValidate"
import { UserEntity } from "../../../src/entities/UserEntity"

describe("Create a user", () => {

  it('Must be able to create a new user', async () => {
    const goRestProvider = new GoRestProvider()
    const userService = new UserService(goRestProvider, UserValidate)

    const userData: UserEntity = {
      name: 'User Test',
      email: 'usertest@test55.com',
      gender: 'male',
      status: 'active'
    }

    const id = await userService.createUser(userData)
    expect(id).toHaveProperty('id')
  })

})