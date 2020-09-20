import express from 'express'

const buttonsRouter = express.Router()

import ButtonController from '../../controllers/authed/ButtonController'

buttonsRouter.get('/', ButtonController.index)
buttonsRouter.post('/create', ButtonController.create)

export default buttonsRouter