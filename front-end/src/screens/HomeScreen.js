import React from 'react';
import products from '../products'
import Product from '../components/Product';

const HomeScreen = () => {

    return (
        <>
            <div className=' home-screen-title'>
                <h1 >LATEST PRODUCTS</h1>
            </div>
            <div className='home-screen'>
                {products.map((product) =>
                    <Product key={product._id} product={product} />
                )}
            </div>
        </>
    )
}

export default HomeScreen
