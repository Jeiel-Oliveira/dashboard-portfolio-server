import mongoose from 'mongoose'
import to from 'await-to-js'

import { Request, Response } from 'express'
import Button from '../../models/Button'

class ButtonController {
  
  async index(request: Request, response: Response) {

    response.send('Button working!')
  }

  // POST /create
  async create(request: Request, response: Response) {
    const { name, text, css } = request.body

    if(!name) return ({ code: 422, message: "Campo obrigatório: Nome." })
    if(!text) return ({ code: 422, message: "Campo obrigatório: Text." })
    if(!text) return ({ code: 422, message: "Campo obrigatório: Css." })

    const [createError, button] = await to(Button.create({
      name, text, css
    }))

    if(createError) {
      return ({ code: 422, message: "Erro ao criar botão." })
    }

    return ({ code: 201, message: "Botão criado com sucesso", created: button })
  }

}

export default new ButtonController()