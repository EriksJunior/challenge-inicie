import { Request, Response, Router } from "express";
import { userController } from "../controllers";

const router = Router()

router.post('/create', (request: Request, response: Response) => {
  return userController.create(request, response)
})

router.get('/findAll', (request: Request, response: Response) => {
  return userController.findAll(request, response)
})

router.get('/findbyid/:id', (request: Request, response: Response) => {
  return userController.findById(request, response)
})

export default router