// models/User.js
import { DataTypes } from 'sequelize'
import { connectionAdmin } from "../database/connection"

export const AdminUser = connectionAdmin.define('User', {
    uname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    passwd: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
