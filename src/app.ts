import express, { Request, Response } from 'express';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/errorHelpers/notFound';

const app = express()
app.use(express.json())

app.use('/api/v1', router)


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        massage: 'Welcome to PH tour server'
    })
})

app.use(globalErrorHandler)
app.use(notFound)

export default app