/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVar } from "../config/env";
import AppError from "../errorHelpers/AppError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let message = `Something Went Wrong !! ${err.message}`

    if (err instanceof AppError) {
        statusCode = err.statusCode
        message = err.message
    }
    else if (err instanceof Error) {
        message = err.message
    }

    res.status(statusCode).json({
        success: false,
        message,
        err,
        stack: envVar.NODE_ENV === 'development' ? err.stack : null
    })
}