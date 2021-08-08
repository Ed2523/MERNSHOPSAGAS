import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';


//Show details about the product

const ProductScreen = (props) => {

    const product = products.find(product => product._id === props.match.params.id)
    console.log(product)
    return (
        <div className='product-screen'>
            <Link className="go-back" to={'/'} >GO BACK</Link>

            <div className="product-details">
                <img className='product-image' src={product.image} alt={product.name} />
                <div className="product-information-wrapper">
                    <div className="product-information">
                        <p className='product-name'>{product.name}</p>

                        <Rating rating={product.rating} numReviews={product.numReviews} />
                        <p className='product-price'>${product.price}</p>
                        <p className='product-description'>{product.description}</p>

                    </div>

                </div>
                <div className="add-to-cart">
                    <div className='add-to-cart-price'>

                        <h1>Price:</h1>
                        <span>${product.price}</span>
                    </div>
                    <div className='add-to-cart-status'>
                        <h1>Status:</h1>
                        <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>

                    </div>
                    <div className='add-to-cart-button'>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProductScreen
