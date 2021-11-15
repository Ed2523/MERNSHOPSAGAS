
//This reducer receives actions from the login action creator, and send its payload data to the  userloginState in the store
export const userLoginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { loading: true }
        case 'USER_LOGIN_SUCCESS':
            //Tha payload for this is the user of the info logged and a token 
            return { loading: false, userInfo: action.payload }
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_LOG_OUT':
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {

    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return { laoding: true }
        case 'USER_REGISTER_SUCCESS':
            return { loading: false, userInfo: action.payload }
        case 'USER_REGISTER_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const userInfoReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case 'USER_INFO_REQUEST':
            return { ...state, laoding: true }
        case 'USER_INFO_SUCCESS':
            return { loading: false, user: action.payload }
        case 'USER_INFO_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }

}


export const userUpdateInfoReducer = (state = {}, action) => {

    switch (action.type) {
        case 'USER_UPDATE_INFO_REQUEST':
            return { ...state, laoding: true }
        case 'USER_UPDATE_INFO_SUCCESS':
            return { loading: false, success: true, userInfo: action.payload }//This userInfo has the updated and latest info of the user
        case 'USER_UPDATE_INFO_FAIL':
            return { loading: false, error: action.payload }
        case 'USER_UPDATE_INFO_RESET':
            return {}
        default:
            return state
    }

}