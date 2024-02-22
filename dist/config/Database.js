"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Database = new sequelize_1.Sequelize('test', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});
exports.default = Database;
