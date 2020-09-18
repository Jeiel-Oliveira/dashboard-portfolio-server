import express from 'express'
import { port, localIp } from './config/globals'

import router from './router'
import connectToDatabase from './database/connection'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

connectToDatabase()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})