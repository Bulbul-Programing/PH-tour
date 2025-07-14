/* eslint-disable no-console */
import mongoose from "mongoose";
import app from "./app";
import { Server } from 'http';

let server: Server

const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://phtour:phtour.1@ph-tour.snnubxy.mongodb.net/Ph-tour?retryWrites=true&w=majority&appName=PH-Tour')

        console.log('Database is connected!!');

        server = app.listen(5000, () => {
            console.log('Server is Running to port 5000');
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