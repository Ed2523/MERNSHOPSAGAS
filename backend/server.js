import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';
import products from './products.js';
//optional
import colors from 'colors';

const app = express();

dotenv.config();

connectToDb();

app.get('/api/products', (req, res) => {
    res.json(products)
})


app.get('/api/products/:id', (req, res) => {
    const product = products.find((productItem) => (
        productItem._id === req.params.id
    ))
    res.json(product)
})



const PORT = process.env.PORT;
app.listen(PORT, console.log(`The server is running and listening to PORT ${PORT}...`.brightYellow.bold))

