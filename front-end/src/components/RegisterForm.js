import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../actions/userAction'


const RegisterForm = ({ location, history }) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)


    let redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userRegistered = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegistered

    const submitHandler = (e) => {
        e.preventDefault()
        //Dispatch Register
        if (!(password === confirmPassword)) {
            setPasswordError(true)
        } else {
            dispatch(userRegister(name, email, password))
        }


    }


    //In case the user already logged in, we redirect the user
    useEffect(() => {

        if (userInfo) {
            history.push(redirect)
        }

    }, [history, userInfo, redirect])


    return (

        <>
            <div className="error-loading">
                {error && <h1 className='error'>{error}</h1>}
                {loading && <h1 className='loading'>Loading...</h1>}
                {passwordError && <h1 className='error'>Passwords don't match</h1>}
            </div>
            <form className="form" onSubmit={submitHandler}>
                <label >
                    <h1>Name: </h1>
                    <input type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Enter Name' />
                </label>

                <label >
                    <h1>Email Address: </h1>
                    <input type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Enter email' />
                </label>
                <label >
                    <h1>Password:</h1>
                    <input type="password"
                        name="password"

                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Enter password' />
                </label>
                <label >
                    <h1>Confirm Password:</h1>
                    <input type="password"
                        name="Confirmpassword"

                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        placeholder='Confirm password' />
                </label>
                <button className='sign-in' type='submit'>REGISTER</button>
                <h2 >    <Link to={'/login'} >Have an account?</Link>
                </h2>
            </form >
        </>

    )
}

export default RegisterForm
