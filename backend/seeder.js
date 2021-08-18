//Seeder.js  insert data into our database

//Packages
import mongoose from 'mongoose'
import dotenv from 'dotenv' //the .env file is in the root folder, make sure you run the server and seeder from there
import colors from 'colors'

//Data
import users from './data/users.js'
import products from './data/products.js'

//Models
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

//Mongoose config to connect to database
import connectToDb from './config/db.js'


dotenv.config()
connectToDb()


const importData = async () => {


    try {

        // We first delete anything inside Order, Product and/or User, because we want to make sure that when we insert data, there is nothing there
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        /*User, Order and Product are our mongo db collections
        with the insertMany method, we are inserting data into our collections in our Mongodb
        */

        const createdUsers = await User.insertMany(users); //Inserts users data into User
        const admin = createdUsers[0]._id // gives back the admin user in our users data that we inserted into User
        const sampleProducts = products.map(product => ({ ...product, user: admin }))/* this goes through each element in products,
         keeps the dataa of each product object, 
         and inserts into each one
         the property user: admin
         admin is the first object in our users array referenced in line 37
        */

        await Product.insertMany(sampleProducts)//Insert all our products now with the user: admin property

        console.log(`Data imported!`.green)
        process.exit()
    }
    catch (err) {
        console.log(`error on importData: ${err}`.red)
        process.exit(1)
    }
}
const deleteData = async () => {


    try {

        // We first delete anything inside Order, Product and/or User, because we want to make sure that when we insert data, there is nothing there
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log(`Data was deleted!`.red)
        process.exit()
    }
    catch (err) {

        console.log(`error on deleteData: ${err}`.red)
        process.exit(1)
    }
}

// Depingin what you add to your node seeder.js command it will execute one function or the other
//Example: from our root folder: node seeder.js -import  will add data to our db
if (process.argv[2] === '-del') {
    deleteData()
}
else if (process.argv[2] === '-import') {
    importData()
}