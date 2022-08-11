import { Request, Response, Router } from "express";
import { userController } from "../controllers";

const router = Router()

router.post('/createuser', (request: Request, response: Response) => {
  return userController.createUser(request, response)
})

router.get('/finduserall', (request: Request, response: Response) => {
  return userController.findUserAll(request, response)
})

router.get('/finduserbyid/:id', (request: Request, response: Response) => {
  return userController.findUserById(request, response)
})

export default router