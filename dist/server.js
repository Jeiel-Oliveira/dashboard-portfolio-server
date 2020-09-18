"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globals_1 = require("./config/globals");
const router_1 = __importDefault(require("./router"));
const connection_1 = __importDefault(require("./database/connection"));
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(router_1.default);
connection_1.default();
app.listen(globals_1.port, () => {
    console.log(`Example app listening at http://localhost:${globals_1.port}`);
});
//# sourceMappingURL=server.js.map