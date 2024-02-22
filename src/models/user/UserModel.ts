import { DataTypes } from "sequelize";
import Database from "../../config/Database";

const UserModel = Database.define('user', {
    name: {
        type: DataTypes.STRING,
        validate: {
            max: 255
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            max: 100
        },
        unique: true
    }
});

export { UserModel };
