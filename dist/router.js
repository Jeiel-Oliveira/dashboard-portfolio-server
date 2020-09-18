"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const buttonsRouter_1 = __importDefault(require("./routes/authed/buttonsRouter"));
const app = express_1.default.Router();
app.get('/', (request, response) => {
    response.send('Hello World!');
});
app.use('/button', buttonsRouter_1.default);
exports.default = app;
//# sourceMappingURL=router.js.map