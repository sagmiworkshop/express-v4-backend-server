import { Request, Response } from 'express'


export const signin = (req:Request, res:Response) => {
    res.status(200).json({
        Message: "Sign in Route"
    })
}

export const signup = (req:Request, res:Response) => {
    res.status(200).json({
        Message: "Sign up Route"
    })
}

export const signout = (req:Request, res:Response) => {
    res.status(200).json({
        Message: "Sign out Route"
    })
}

export const oauth = (req:Request, res:Response) => {
    res.status(200).json({
        Message: "OAuth Route"
    })
}
