import axios from 'axios'



//This replace UseEffect
export const listProducts = () => async (dispatch) => {

    try {

        // First we dispatch the PRODUCTS_LIST_REQUEST action to the productReducer
        dispatch({ type: 'PRODUCT_LIST_REQUEST' })
        //Then we send an async request using axios to fetch our products
        const { data } = await axios.get('/api/products')
        //If everything went successfully, then we dispatch the PRODUCT_LIST_SUCCESS action
        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            //And we send the data we fetch as the payload
            payload: data
        })

    }
    //Else if something went wrong we catch the error
    catch (error) {
        // And we dispatch the PRODUCT_LIST_FAIL action
        dispatch({
            type: 'PRODUCT_LIST_FAIL',
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }


}

export const listProductsDetails = (id) => async (dispatch) => {

    try {

        // First we dispatch the PRODUCTS_DETAILS_REQUEST action to the productReducer
        dispatch({ type: 'PRODUCT_DETAILS_REQUEST' })
        //Then we send an async request using axios to fetch our products
        const { data } = await axios.get(`/api/products/${id}`)
        //If everything went successfully, then we dispatch the PRODUCT_DETAILS_SUCCESS action
        dispatch({
            type: 'PRODUCT_DETAILS_SUCCESS',
            //And we send the data we fetch as the payload
            payload: data,
        })

    }
    //Else if something went wrong we catch the error
    catch (error) {
        // And we dispatch the PRODUCT_DETAILS_FAIL action
        dispatch({
            type: 'PRODUCT_DETAILS_FAIL',
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }


}