import express, { Express, Request, Response } from 'express'
import { PORT } from "../config.json"

const App: Express = express()

App.use(express.json())

App.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

App.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
