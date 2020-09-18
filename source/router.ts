import express from 'express';
import { Request, Response } from 'express'
import buttonsRouter from './routes/authed/buttonsRouter'

const app = express.Router();

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World!')
})

app.use('/button', buttonsRouter)

export default app