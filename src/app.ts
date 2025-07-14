import express, { Request, Response } from 'express';

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        massage: 'Welcome to PH tour server'
    })
})

export default app