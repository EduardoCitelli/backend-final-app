import mongoose, { ConnectOptions } from 'mongoose'
const { CONNECTION_STRING } = process.env;

const options: ConnectOptions = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    retryWrites: false,
}

mongoose.connect(CONNECTION_STRING as string, options)
    .then(() => {
        console.log(`🍃 Connected to MongoDB database`);
    })
    .catch((error) => {
        console.error(error);
    });

process.on("uncaughtException", (error: Error) => {
    console.error(error);
    mongoose.disconnect();
});