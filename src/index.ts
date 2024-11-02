import { connectionAdmin } from "./database/connection"
import AuthRoutes from './routes/auth.routes'
import express, { Express } from 'express'
import { PORT } from "../config.json"
import path from 'path'
import cors from 'cors'

// Initialize Express App
const App: Express = express()

// Define the path to your public folder
const publicPath = path.join(__dirname, '../public');

// Middlewares
App.use(cors())                                   // CORS Policy
App.use(express.json())                           // JSON Parser
App.use(express.urlencoded({ extended: true }))   // URL Encoder

// Routes
App.use('/', express.static(publicPath))
App.use("api/v1/auth", AuthRoutes)

App.listen(PORT, async () => {
  // Server Initialized
  console.log(`Server is running at http://localhost:${PORT}`)

  // Sequelize Initialized
  await connectionAdmin.authenticate()
    .then(() => console.log("MySQL Database Connected Successfully"))
    .catch(err => console.log(err))
})
