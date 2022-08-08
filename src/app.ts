import express from 'express'
import { Router, Request, Response } from 'express';

import cors from 'cors'
import 'dotenv/config'

import index from './routes/index'

const app = express()
const route = Router();

app.use(cors())
app.use(express.json())
app.use(route)
app.use(index)

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Server started' })
})

app.disable('X-Powered-By')

export default app