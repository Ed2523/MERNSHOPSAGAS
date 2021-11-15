import axios from 'axios'

//Redux thunk is being used
//This login action creatorm sents a post request to the server and the server returns you the user info plus a token
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })



        //This is for passing the toke to the server for authorization purpose
        //This is passed as a third parameter for the axios.post request below
        const config = {
            headers: {
                //This header indicates that the body of the request is JSON format
                'Content-Type': 'application/json'
            }
        }
        /*If the information is valid and pass the validations from the server, 
        the server returns you the informaction of the user Logged with a specific token for that user
        */const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })

        console.log(data)
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {


        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        })
    }
}

export const userLogout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: 'USER_LOGOUT' })
}


export const userRegister = (name, email, password) => async (dispatch) => {
    try {

        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })



        //This is for passing the toke to the server for authorization purpose
        //This is passed as a third parameter for the axios.post request below
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //Our route in the server is just api/users to create a new user
        const { data } = await axios.post('/api/users', { name, email, password }, config)

        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: data
        })

        //After the user was created we also log the user in
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {


        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        })
    }
}
//This  dispatch actions to the userInforReducer
export const getUserInfo = (id) => async (dispatch, getState) => {
    try {

        dispatch({
            type: 'USER_INFO_REQUEST'
        })

        //We are descontruting the userLogin state, because we need to the token the server sents back when the the user logs in
        const { userLogin: { userInfo } } = getState()

        //This is for passing the toke to the server for authorization purpose
        //This is passed as a third parameter for the axios.post request below
        //We are sending Authorization header with a bearer token from userLogin-userInfo deconstructed state
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`//userInfo provides you the info of the user when this is logged, also provides you with a generate token from the server
            }
        }
        //Our route in the server is just api/users to create a new user
        const { data } = await axios.get(`/api/users/${id}`, config)//data is the user info without the token

        dispatch({
            type: 'USER_INFO_SUCCESS',
            payload: data
        })



    } catch (error) {


        dispatch({
            type: 'USER_INFO_FAIL',
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        })
    }
}

export const updateUserInfo = (user) => async (dispatch, getState) => {
    try {

        dispatch({
            type: 'USER_UPDATE_INFO_REQUEST'
        })

        //We are descontruting the userLogin state, because we need to the token the server sents back when the the user logs in
        const { userLogin: { userInfo } } = getState()

        //This is for passing the toke to the server for authorization purpose
        //This is passed as a third parameter for the axios.post request below
        //We are sending Authorization header with a bearer token from userLogin-userInfo deconstructed state
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        //Our route in the server is just api/users to create a new user
        const { data } = await axios.put(`/api/users/profile`, user, config)//This data has the updated information

        dispatch({
            type: 'USER_UPDATE_INFO_SUCCESS',
            payload: data
        })
        // We dispatch loign action to see the info updated 
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringfy(data))

    } catch (error) {


        dispatch({
            type: 'USER_UPDATE_INFO_FAIL',
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        })
    }
}