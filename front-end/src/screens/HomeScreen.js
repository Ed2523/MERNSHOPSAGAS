import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios';
import Product from '../components/Product';
import { listProducts } from '../actions/productAction'



const HomeScreen = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(
        // () => {
        //     const getProducts = async () => {

        //         const res = await axios.get('/api/products')
        //         setProducts(res.data);

        //     }
        //     getProducts()
        // }



        () => { dispatch(listProducts()) }

        , [dispatch])


    return (
        <>
            <div className=' home-screen-title'>
                <h1 >LATEST PRODUCTS</h1>
            </div>

            {loading ?
                (
                    <div className="home-screen">
                        <h1>Loading...</h1>
                    </div>
                ) :

                error ?
                    (
                        <div className="home-screen">
                            <h1>{error}</h1>
                        </div>
                    ) :

                    (
                        <div className='home-screen'>
                            {products.map((product) =>
                                <Product key={product._id} product={product} />
                            )}
                        </div>
                    )}
        </>
    )
}

export default HomeScreen
