import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { CatchAsync } from "../../utils/catchAsync";

const createUser = CatchAsync(async (req: Request, res: Response) => {
    const user = await UserServices.createUser(req.body)

    res.status(httpStatus.CREATED).json({
        message: "User Created Successfully",
        user
    })
})





export const UserControllers = {
    createUser
}