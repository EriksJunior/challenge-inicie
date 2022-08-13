import { Request, Response, Router } from "express";
import { postController } from "../controllers";

const router = Router()

router.post('/createpost', (request: Request, response: Response) => {
  return postController.createAuserPost(request, response)
})


export default router