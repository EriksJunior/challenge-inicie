import { UserController } from "./UserController";
import { UserService } from "../services/UserService";


const userService = new UserService()

const userController = new UserController(
  userService
)


export {userController}