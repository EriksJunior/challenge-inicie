import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { Router, Request, Response } from 'express';


const app = express()
const route = Router();

app.use(cors())
app.use(express.json())
app.use(route)

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Server started' })
})

app.disable('X-Powered-By')

export default app