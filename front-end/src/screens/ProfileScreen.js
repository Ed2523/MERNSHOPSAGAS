import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, updateUserInfo } from '../actions/userAction'

function ProfileScreen({ history }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const dispatch = useDispatch()
    //userDetails is the user info that comes from the userInfo state
    const userDetails = useSelector(state => state.userInfo)
    const { loading, error, user } = userDetails


    //We bring in the userInfo to check if the user is loged in
    const userLogin = useSelector(state => state.userLogin)//this state is the user info from the server with a token
    //userLogin is the state from the userLoginReducer
    const { userInfo } = userLogin//This is the userinfo with a token
    //We bring back success from our userUpdate state to show a meesage when user info has been updated
    const userUpdate = useSelector(state => state.userUpdate)
    const { success } = userUpdate




    useEffect(() => {
        //If user is not logged in
        if (!userInfo) {
            history.push('/login')
        }
        //If user is logged in
        else {
            //We bring success to check if user info has been updated, that way we reset the user info
            if (!(user.name) || success) {
                dispatch({ type: 'USER_UPDATE_INFO_RESET' })
                //Why am i passing profile as an id?
                dispatch(getUserInfo('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])



    const submitHandler = (e) => {
        e.preventDefault()
        //Dispatch Register
        if (!(password === confirmPassword)) {
            setPasswordError(true)
        } else {
            // DISPATCH UPDATED PROFILE
            dispatch(updateUserInfo({
                id: user._id,
                name,
                email,
                password
            }))

            console.log(userInfo)
            console.log(user)
        }
    }

    return (
        <div className='profile-container'>
            <div className="user-profile-info">
                <div className="error-loading">
                    {error && <h1 className='error'>{error}</h1>}
                    {loading && <h1 className='loading'>Loading...</h1>}
                    {passwordError && <h1 className='error'>Passwords don't match</h1>}
                    {success && <h1 className='success'>The profile has been updated</h1>}

                </div>
                <form className="form" onSubmit={submitHandler}>
                    <label >
                        <h1>Name: PROFILE</h1>
                        <input type="text"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            placeholder='Enter Name' />
                    </label>

                    <label >
                        <h1>Email Address: </h1>
                        <input type="email"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            placeholder='Enter email' />
                    </label>
                    <label >
                        <h1>Password:</h1>
                        <input type="password"
                            name="password"

                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            placeholder='Enter password' />
                    </label>
                    <label >
                        <h1>Confirm Password:</h1>
                        <input type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder='Confirm password' />
                    </label>
                    <button className='update' type='submit'>UPDATE INFORMATION</button>

                </form >
            </div>
            <div className="orders">
                MY ORDERS
            </div>

        </div>
    )
}


export default ProfileScreen

// const formik = useFormik({
//     initialValues: {
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     },
//     onSubmit: (values) => {
//         if (!(values.password === values.confirmPassword)) {
//             setPasswordError(true)
//         } else {
//             // DISPATCH UPDATED PROFILEs
//             dispatch(updateUserInfo({
//                 id: user._id,
//                 name: values.name,
//                 email: values.email,
//                 password: values.password
//             }))
//         }
//     }
// })
