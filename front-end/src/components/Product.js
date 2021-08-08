import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './Rating';

//Card that show a preview of the product information

const Product = ({ product }) => {
    return (

        <div className='card'>
            <div className="card-image">
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt="" />
                </Link>
            </div>
            <div className="card-body">
                <Link className="product-name" to={`/product/${product._id}`} >
                    <p>{product.name}</p>
                </Link>

                <div className="reviews">
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                </div>

                <div className="price">
                    <p>${product.price}</p>
                </div>
            </div>

        </div>
    )
}

export default Product
