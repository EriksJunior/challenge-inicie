import { Router } from "express";

import userRouter from './User'
import postRouter from './Post'
import commentsRouter from './Comments'

const router = Router()

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/comments', commentsRouter)

export default router
