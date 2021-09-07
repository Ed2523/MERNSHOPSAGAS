import axios from 'axios'

//Redux thunk is being used
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: 'USER_LOGIN_REQUEST'
        })



        //This is for passing the toke to the server for authorization purpose
        //This is passed as a third parameter for the axios.post request below
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })

        console.log(data)
        sessionStorage.setItem('userInfo', JSON.stringify(data))

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