import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import CartProduct from '../components/CartProduct'


const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    // console.log(typeof quantity + ' ' + quantity)
    console.log(cartItems)
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }
    },
        [dispatch, productId, quantity])


    return (
        <div className='cart'>
            <h1>SHOPPING CART</h1>

            <div className="cart-info">
                <div className="cart-product-list">
                    {cartItems.length === 0 ?
                        (<h1>NO ITEMS IN YOUR CART <Link to={'/'}>GO BACK</Link></h1>) :

                        cartItems.map(item => <CartProduct key={item.product} id={item.product} img={item.image} price={item.price} name={item.name} quantity={item.quantity} countInStock={item.countInStock} />)
                    }
                </div>

                <div className="checkout">
                    <h1>Items in Cart: {cartItems.reduce((acumulator, item) => acumulator + item.quantity, 0)}</h1>
                    <h1>Total: $ {cartItems.reduce((acumulator, item) => acumulator + (item.quantity * item.price), 0).toFixed(2)}</h1>
                    <button>CHECKOUT</button>
                </div>

            </div>

        </div>
    )
}

export default CartScreen
