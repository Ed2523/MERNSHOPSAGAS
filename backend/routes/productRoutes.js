/*Express router is a class which helps us to create router handlers. 
a router handler provides routing to our app but also can extend 
this routing to handle validation, handle 404 or other errors etc.*/
const router = express.Router()
import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'


router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router


/*
previous way of setting a route without express router
app.get('/:id', (req, res) => {
    const product = products.find((productItem) => (
        productItem._id === req.params.id
    ))
    res.json(product)
}) */