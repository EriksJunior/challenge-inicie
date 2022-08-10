import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { GoRestProvider } from "../providers/GoRestProvider";
import { UserValidate } from "../validators/UserValidate";

const goRestProvider = new GoRestProvider()

const userService = new UserService(
  goRestProvider,
  UserValidate
)

const userController = new UserController(
  userService
)


export { userController }