import express from 'express'

const buttonsRouter = express.Router()

import ButtonController from '../../controllers/authed/ButtonController'

buttonsRouter.get('/', ButtonController.index)

export default buttonsRouter