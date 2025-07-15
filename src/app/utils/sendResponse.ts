import { Response } from "express";

interface TMeta {
    total: number
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TResponse<T> = {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
    meta?: TMeta
}

export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data.statusCode).json({
        success: data.success,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data,
        meta: data.meta
    })
}