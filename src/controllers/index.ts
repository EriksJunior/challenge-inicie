import { UserController } from "./UserController";
import { PostController } from "./PostController";

import { UserService } from "../services/UserService";
import { PostService } from "../services/PostService";

import { UserValidate } from "../validators/UserValidate";
import { PostValidade } from "../validators/PostValidade";

import { GoRestProvider } from "../providers/GoRestProvider";


const goRestProvider = new GoRestProvider()

//service
const userService = new UserService(
  goRestProvider,
  UserValidate
)
const postService = new PostService(
  goRestProvider,
  PostValidade
)

//controller
const userController = new UserController(
  userService
)
const postController = new PostController(
  postService
)


export { userController, postController }