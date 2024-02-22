"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/user/UserController"));
const router = express_1.default.Router();
router.post('/user', UserController_1.default.createUser);
router.get('/user', () => {
    return 'hello';
});
exports.default = router;
