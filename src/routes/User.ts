import { request, response, Router } from "express";
import { userController } from "../controllers";

const router = Router()

router.post('/create', (request, response) =>{
  return userController.create(request, response)
})

router.get('/search', (request, response) =>{
  return userController.fyndById(request, response)
})

export default router