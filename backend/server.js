/*Using ES6 modules, we added  "type": "module", in our root json file, 
also because of this now we need to use .js at the end of our imports*/

import express from 'express'

//Dotenv is amodule that loads environment variables from a .env file into process.env
import dotenv from 'dotenv'

//Imports the configuration needed to connect to our db
import connectToDb from './config/db.js'


//No longer needed: import products from './data/products.js';

//Import our routes added to "app.use('/api/products')"
import productRoutes from './routes/productRoutes.js'

import userRoutes from './routes/userRoutes.js'

//error middlewares
import { notFound, errorHandler } from './middlewares/middlewareError.js'

//optional package to add colors to our console messages
import colors from 'colors';

const app = express();


app.use(express.json())
dotenv.config();

connectToDb();




app.get('/', (req, res) => {
    res.send('Api is running..')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

//This below is a middleware that define an error message for non existen routes
app.use(notFound)

//Middleware to handle errors, help us to avoid receiving an html file with the error information, instead with get a message in a json format 
app.use(errorHandler)







const PORT = process.env.PORT;

app.listen(PORT, console.log(`The server is running and listening to PORT ${PORT}...`.brightYellow.bold))

