import mongoose from "mongoose";



const connectToDb = async () => {
    try {
        //mongoose.connect() method allow us to connects to our mongo db
        const mongCon = await mongoose.connect(
            //MONGO_CONNECTION is enviroment var saved in our .env file, it cointains the url to our db
            /*we are using process.env to access our enviroment var in .env
            this thanks to our dotenv module that is runnning on our server.js 
            */
            process.env.MONGO_CONNECTION, //MONGO_CONNECTION is a uri to our db in mongodb atlas
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true
            });
        console.log(`Mongo database connected: ${mongCon.connection.host}`.brightGreen.bold)
    }
    catch (err) {
        console.log(err)
        process.exit(1);//It is going to exit with error
    }
}

export default connectToDb;