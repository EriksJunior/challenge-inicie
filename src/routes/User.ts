import { request, response, Router } from "express";
import { userController } from "../controllers";

const router = Router()

router.get('/searchUser', (request, response) =>{
  return userController.searchUser(request, response)
})

export default router