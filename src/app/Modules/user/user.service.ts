import { IUser } from "./user.interface";
import { User } from "./user.models";

const createUser = async (payload: Partial<IUser>) => {
    const { name, email } = payload;
    const user = await User.create({
        name,
        email
    })

    return user

}

export const UserServices = {
    createUser
}