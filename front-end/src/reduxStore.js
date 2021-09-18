import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/CartReducer'
import { userLoginReducer } from './reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducer is like a robot that changes things in our store
//combineReducers 
//Remeber that you state us what you receive from the redecuer not the initial state
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})

const cartItemsFromStorage = sessionStorage.getItem('cartItems') ? JSON.parse(
    sessionStorage.getItem('cartItems')
) : []

const userInfoFromStorage = sessionStorage.getItem('userInfo') ? JSON.parse(
    sessionStorage.getItem('userInfo')
) : null

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
}

/*Redux Thunk middleware allows you to write action creators that 
return a function instead of an action. 
The thunk can be used to delay the dispatch of an action,
 or to dispatch only if a certain condition is met. 
The inner function receives the store methods dispatch and getState as parameters. */
const middleware = [thunk]

/*The createStore create a store XD, and receive two parameters
the first is the reducer that is a function in charge of making changes in our store,
the second one is the initial state
*/
const reduxStore = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
)

export default reduxStore