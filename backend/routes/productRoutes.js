import express from 'express'

/*Simple middleware for handling exceptions(errors)
 inside of async express routes and passing them
 to your express error handlers, 
 with this, we dont need to use "try{}catch(){}" or ".then.catch" anymore 
for every route we have */
import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

/*Express router is a class which helps us to create router handlers. 
a router handler provides routing to our app but also can extend 
this routing to handle validation, handle 404 or other errors etc.*/
const router = express.Router()



/*
Description: Fetch all the products
route: GET /api/products
access Public
*/
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}
))


/*
Description: Fetch a single product
route: GET /api/products/:id
access Public
*/
router.get('/:id', asyncHandler(async (req, res) => {
    //Route params are parameters whose values are set dynamically in a page's URL, in this case is :id
    /* This below is going to find the product
    with req.paramas.id(Route params) in our URL,
    Product.findById() is going to seacrh in our Product collection in our db
    for the product with the id passed as a parameter
    Note: that we inserted our data into our db using our seeder.js file
    */
    const product = await Product.findById(req.params.id)//This finds the product with the dynamic parameter :id in our Product collection

    if (product) {
        res.json(product)
    } else {
        //     res.status(404).json({ message: 'Product not found' })
        res.status(404)
        throw new Error('Product not found')
    }

    res.json(product)
}))


export default router


/*
previous way of setting a route without express router
app.get('/:id', (req, res) => {
    const product = products.find((productItem) => (
        productItem._id === req.params.id
    ))
    res.json(product)
}) */