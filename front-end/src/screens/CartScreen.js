import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'


const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log(cartItems)
    // console.log(typeof quantity + ' ' + quantity)


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }
    },
        [dispatch, productId, quantity])

    return (
        <div className='cart'>
            {cartItems.map(item => <h1>Product: {item.name} / Quantity: {item.quantity}</h1>)}
        </div>
    )
}

export default CartScreen
