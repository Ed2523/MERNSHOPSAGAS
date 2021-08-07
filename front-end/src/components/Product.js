import React from 'react'

const Product = ({ product }) => {
    return (

        <div className='card'>
            <div className="card-image">
                <a href={`/product/${product._id}`}>
                    <img src={product.image} alt="" />
                </a>
            </div>
            <div className="card-body">
                <div className="product-name">
                    <p>{product.name}</p>
                </div>
                <div className="reviews">
                    <p>{product.rating} from {product.numReviews} </p>
                </div>
                <div className="price">
                    <p>${product.price}</p>
                </div>
            </div>

        </div>
    )
}

export default Product
