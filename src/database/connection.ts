import { Sequelize } from 'sequelize'
import { database, db_host } from "../../config.json"
import dotenv from "dotenv"

// Initialize Environment Variables
dotenv.config()

const user = process.env.DB_USERNAME as string
const passwd = process.env.DB_PASSWD as string

export const connectionAdmin = new Sequelize(
    database.admin,
    user,
    passwd,
    {
        host: db_host,
        dialect: "mysql"
    })
