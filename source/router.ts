import express from 'express';
import { Request, Response } from 'express'
import authed from './routes/authed'

const app = express.Router();

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World!')
})

app.use('/button', authed.buttonRouter)

export default app