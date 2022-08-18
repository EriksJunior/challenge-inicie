import { Request, Response, Router } from "express";
import { postController } from "../controllers";

const router = Router()

router.post('/createpost', (request: Request, response: Response) => {
  return postController.createsAuserPost(request, response)
})

router.get('/findpostbyuserid/:id', (request: Request, response: Response) => {
  return postController.findPostByUserId(request, response)
})

router.get('/findallpublicposts', (request: Request, response: Response) => {
  return postController.searchForTheLatest(request, response)
})

export default router