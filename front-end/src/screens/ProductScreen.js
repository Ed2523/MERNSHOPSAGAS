import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { listProductsDetails } from '../actions/productAction'


//Show details about the product
const ProductScreen = ({ match, history }) => {
    // match comes from props object
    // const product = products.find(product => product._id === props.match.params.id)
    // const [product, setProduct] = useState({});

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    const [qtyOfItems, setQtyOfItems] = useState(1);

    useEffect(() => {
        dispatch(listProductsDetails(match.params.id))

    }, [dispatch, match, qtyOfItems]);


    const addToCart = () => {
        history.push(`/cart/${match.params.id}?quantity=${qtyOfItems}`)
    }



    return (
        <div className='product-screen'>
            <Link className="go-back" to={'/'} >GO BACK</Link>

            {loading ?
                (
                    <div className="product-details">
                        <h1>Loading...</h1>
                    </div>
                ) :

                error ?
                    (
                        <div className="product-details">
                            <h1>{error}</h1>
                        </div>
                    ) :

                    (
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

                                    <label>Price:</label>
                                    <span>${product.price}</span>
                                </div>
                                <div className='add-to-cart-status'>
                                    <label>Status:</label>
                                    <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>

                                </div>

                                {product.countInStock > 0 ?
                                    (
                                        <div className='add-to-cart-quantity'>
                                            <label htmlFor='Quantity'>Qty:</label>
                                            <select name='' id="Quantity" onClick={(e) => setQtyOfItems(e.target.value)}>

                                                {
                                                    //Array() creates an array with the lenght og countInStock
                                                    //[...Array().keys] Creates other array with the keys of the first array
                                                    //.map go through all the elements in the array and create a 'list' of options where x + 1 is the value and key of each element in the 'list'
                                                    [...Array(product.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1} >{x + 1}</option>
                                                    ))

                                                }

                                            </select>
                                        </div>
                                    ) : <div></div>
                                }
                                <div className='add-to-cart-button'>
                                    <button onClick={addToCart}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default ProductScreen
