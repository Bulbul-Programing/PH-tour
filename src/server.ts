/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import { Server } from 'http';
import { envVar } from "./app/config/env";

let server: Server

const startServer = async () => {
    try {
        await mongoose.connect(envVar.DB_URL)

        console.log('Database is connected!!');

        server = app.listen(5000, () => {
            console.log(`Server is Running to port ${envVar.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received ... server is shuting down!! ');

    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

process.on('unhandledRejection', () => {
    console.log('Unhandled Rejection detected ... server is shuting down!! ');

    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

process.on('uncaughtException', () => {
    console.log('Uncaught exception detected ... server is shuting down!! ');

    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

startServer()