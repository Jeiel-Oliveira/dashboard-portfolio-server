import mongoose from 'mongoose'

import { Request, Response } from 'express'

class ButtonController {

  async index(request: Request, response: Response) {

    response.send('Button working!')
    
  }

}

export default new ButtonController()