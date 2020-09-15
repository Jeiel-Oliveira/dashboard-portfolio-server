import express from 'express';
import { Request, Response } from 'express'

const app = express.Router();

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World!')
})

export default app