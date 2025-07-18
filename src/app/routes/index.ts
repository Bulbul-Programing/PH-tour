import { Router } from 'express';
import { UserRoutes } from '../Modules/user/user.route';

export const router = Router()

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
    // {
    //     path: "/tour",
    //     route: TourRoutes
    // },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})