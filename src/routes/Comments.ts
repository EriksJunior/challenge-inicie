import { Request, Response, Router } from "express";
import { commentsController } from "../controllers";

const router = Router()

router.post('/createcomment', (request: Request, response: Response) => {
  return commentsController.createCommentOnPost(request, response)
})

router.post('/createcommentinfistpostpublic', (request: Request, response: Response) => {
  return commentsController.createCommentTheFirstPostInListPublic(request, response)
})

router.get('/findcommentsbypublicpostid/:id', (request: Request, response: Response) => {
  return commentsController.findCommentsByPublicPostId(request, response)
})

router.delete('/deletecomment/:id', (request: Request, response: Response) => {
  return commentsController.deleteComment(request, response)
})

export default router