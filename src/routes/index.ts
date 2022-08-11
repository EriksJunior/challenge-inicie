import { Router } from "express";

import userRouter from './User'
import postRouter from './Post'

const router = Router()

router.use('/user', userRouter)
router.use('/post', postRouter)

export default router
