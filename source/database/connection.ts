import connection from './../config/connection'
import mongoose from 'mongoose'
import to from 'await-to-js'

const MongoClient = require('mongodb').MongoClient 

const { connectionString, connectionOptions, databaseName } = connection

const connectToDatabase = async () => {
  const [error, _] = await to(mongoose.connect(connectionString, connectionOptions))
  console.log({ databaseName, error })
  mongoose.set('useFindAndModify', false)
}

export default connectToDatabase