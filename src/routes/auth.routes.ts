import express, { Router } from 'express'
import { oauth, signin, signout, signup } from "../controllers/authController"

// Express Router
const router: Router = express.Router()

// Auth Routes
router.get("/signin", signin)
router.put("/signup", signup)
router.delete("/signout", signout)
router.get("/oauth", oauth)

export default router