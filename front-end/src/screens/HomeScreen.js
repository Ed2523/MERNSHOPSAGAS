import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            const getProducts = async () => {

                const res = await axios.get('/api/products')
                setProducts(res.data);

            }
            getProducts()
        }, [])

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
