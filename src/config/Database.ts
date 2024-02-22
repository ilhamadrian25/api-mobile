import { Sequelize } from "sequelize";

const Database = new Sequelize('test', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
})

export default Database