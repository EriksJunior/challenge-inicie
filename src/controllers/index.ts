import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { UserRepo } from "../repositories/UserRepo";
import { UserValidate } from "../validators/UserValidate";

const userRepo = new UserRepo()

const userService = new UserService(
  userRepo,
  UserValidate
)

const userController = new UserController(
  userService
)


export { userController }