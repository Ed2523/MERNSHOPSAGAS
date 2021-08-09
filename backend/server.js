import express from 'express';
import dotenv from 'dotenv';
import products from './products.js';
const app = express();

dotenv.config();

app.get('/api/products', (req, res) => {
    res.json(products)
})


app.get('/api/products/:id', (req, res) => {
    const product = products.find((productItem) => (
        productItem._id === req.params.id
    ))
    res.json(product)
    console.log(product)
})



const PORT = process.env.PORT;
app.listen(PORT, console.log(`The server is running and listening to PORT ${PORT}...`))

