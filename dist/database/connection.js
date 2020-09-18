"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./../config/connection"));
const mongoose_1 = __importDefault(require("mongoose"));
const await_to_js_1 = __importDefault(require("await-to-js"));
const MongoClient = require('mongodb').MongoClient;
const { connectionString, connectionOptions, databaseName } = connection_1.default;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const [error, _] = yield await_to_js_1.default(mongoose_1.default.connect(connectionString, connectionOptions));
    console.log({ databaseName, error });
    mongoose_1.default.set('useFindAndModify', false);
});
exports.default = connectToDatabase;
//# sourceMappingURL=connection.js.map