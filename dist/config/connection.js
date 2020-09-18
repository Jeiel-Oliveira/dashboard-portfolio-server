"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = __importDefault(require("./variables"));
const { DATABASE_CLUSTER, DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = variables_1.default;
const cluster = DATABASE_CLUSTER;
const databaseName = DATABASE_NAME;
const username = DATABASE_USERNAME;
const password = DATABASE_PASSWORD;
const connectionString = `mongodb+srv://${username}:${password}@${cluster}/${databaseName}?retryWrites=true&w=majority`;
const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
};
exports.default = { connectionOptions, connectionString, databaseName };
//# sourceMappingURL=connection.js.map