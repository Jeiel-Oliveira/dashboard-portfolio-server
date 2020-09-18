"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const buttonsRouter = express_1.default.Router();
const ButtonController_1 = __importDefault(require("../../controllers/authed/ButtonController"));
buttonsRouter.get('/', ButtonController_1.default.index);
exports.default = buttonsRouter;
//# sourceMappingURL=buttonsRouter.js.map