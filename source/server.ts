import express from 'express'
import { port, localIp } from './config/globals'

import router from './router'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})