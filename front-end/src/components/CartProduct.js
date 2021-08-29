import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'

const CartProduct = ({ id, img, name, quantity, price, countInStock }) => {
    const dispatch = useDispatch()
    let [test, setTest] = useState(true)
    return (
        <div className='product-cart'>
            <div className="product-cart-details image">
                <img src={img} alt="" />
            </div>
            <div className="product-cart-details name">
                <h1>{name}</h1>
            </div>
            <div className="product-cart-details ">${price}</div>
            <div className="product-cart-details">
                <select name='' id="Quantity" onClick={(e) => {

                    dispatch(addToCart(id, Number(e.target.value)))
                    setTest(false)
                }}>

                    {test ? (<option >{quantity}</option>) :
                        [...Array(countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1} >{x + 1}</option>
                        ))
                    }
                </select>
            </div>
            <div className="product-cart-details ">
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default CartProduct
