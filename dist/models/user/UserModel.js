"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const Database_1 = __importDefault(require("../../config/Database"));
const UserModel = Database_1.default.define('user', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            max: 255
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            max: 100
        },
        unique: true
    }
});
exports.UserModel = UserModel;
