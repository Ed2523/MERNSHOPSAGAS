import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const mongCon = await mongoose.connect(
            process.env.MONGO_CONNECTION,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            })
        console.log(`Mongo database connected: ${mongCon.connection.host}`.green.bold)
    }
    catch (err) {
        console.log(err.red.underline.bold)
        process.exit(1);//It is going to exit with error
    }
}

export default connectToDb;