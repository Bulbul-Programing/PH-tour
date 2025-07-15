import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = CatchAsync(async (req: Request, res: Response) => {
    const user = await UserServices.createUser(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        data: user,
        message: "User Created successfully",
    })
})





export const UserControllers = {
    createUser
}