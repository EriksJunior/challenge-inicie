import { UserController } from "./UserController";
import { PostController } from "./PostController";
import { CommentsController } from "./CommentsController";

import { UserService } from "../services/UserService";
import { PostService } from "../services/PostService";
import { CommentsService } from "../services/CommentsService";

import { UserValidate } from "../validators/UserValidate";
import { PostValidade } from "../validators/PostValidade";
import { CommentsValidate } from "../validators/CommentsValidate";

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
const commentsService = new CommentsService(
  goRestProvider,
  CommentsValidate
)

//controller
const userController = new UserController(
  userService
)
const postController = new PostController(
  postService
)
const commentsController = new CommentsController(
  commentsService
)


export { userController, postController, commentsController }