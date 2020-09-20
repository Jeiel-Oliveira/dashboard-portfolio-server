import connection from './../config/connection'
import mongoose from 'mongoose'
import to from 'await-to-js'
import colors from 'colors'

const MongoClient = require('mongodb').MongoClient 

const { connectionString, connectionOptions, databaseName } = connection

const connectToDatabase = async () => {
  const [error, _] = await to(mongoose.connect(connectionString, connectionOptions))  

  if(error) console.log(error)

  console.log(colors.green("CONNECT TO ") + colors.blue(databaseName))

  mongoose.set('useFindAndModify', false)
}

export default connectToDatabase