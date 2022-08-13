import { Request, Response, Router } from "express";
import { commentsController } from "../controllers";

const router = Router()

router.post('/createcomment', (request: Request, response: Response) => {
  return commentsController.createsApostComment(request, response)
})


export default router