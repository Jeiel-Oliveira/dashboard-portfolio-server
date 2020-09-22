import mongoose from 'mongoose';
import to from 'await-to-js';

import { Request, Response } from 'express';
import Button from '../../models/Button';

import status from '../../helpers/status';

const file = "ButtonController.ts"

class ButtonController {
  
  async index(request: Request, response: Response) {

    response.send('Button working!')
  }

  // POST /create
  async create(request: Request, response: Response) {
    const { name, text, css } = request.body    

    const [createError, button] = await to(Button.create({
      name, text, css
    }))

    if(createError) {
      return status.error(file, request, response, createError, "Ocorreu um erro ao criar o botão")
    }

    return status.success(response, "Criação do botão realizada com sucesso!")
  }

}

export default new ButtonController()