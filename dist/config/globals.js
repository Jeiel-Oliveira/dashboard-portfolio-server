"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localIp = exports.port = void 0;
const variables_1 = __importDefault(require("./variables"));
const { PORT, IP } = variables_1.default;
exports.port = String(PORT);
exports.localIp = String(IP);
//# sourceMappingURL=globals.js.map