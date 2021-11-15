import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/CartReducer'
import { userLoginReducer, userRegisterReducer, userInfoReducer, userUpdateInfoReducer } from './reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducer is like a robot that changes things in our store
//combineReducers 
//Remeber that you state us what you receive from the redecuer not the initial state
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,//This is the information of the user logged plus a token from the server
    userRegister: userRegisterReducer,
    userInfo: userInfoReducer,
    userUpdate: userUpdateInfoReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(
    localStorage.getItem('cartItems')
) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(
    localStorage.getItem('userInfo')
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

/*The createStore create a store, and receive two parameters
the first is the reducer that is a function in charge of making changes in our store,
the second one is the initial state
*/
const reduxStore = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
)

export default reduxStore