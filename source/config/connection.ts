
import variables from './variables'

const { DATABASE_CLUSTER,
  DATABASE_NAME, 
  DATABASE_USERNAME, 
  DATABASE_PASSWORD } = variables

const cluster = DATABASE_CLUSTER
const databaseName = DATABASE_NAME
const username = DATABASE_USERNAME
const password = DATABASE_PASSWORD

const connectionString = `mongodb+srv://${username}:${password}@${cluster}/${databaseName}?retryWrites=true&w=majority`

const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false
}

export default { connectionOptions, connectionString, databaseName }