import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'


const Form = ({ location, history }) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))

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
            </div>
            <form className="form" onSubmit={submitHandler}>
                <label >
                    <h1>Email Address:</h1>
                    <input type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Enter email' />
                </label>
                <label >
                    <h1>Password:</h1>
                    <input type="text"
                        name="password"

                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Enter password' />
                </label>
                <button className='sign-in' type='submit'>SIGN IN</button>
                <h2 >    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>SIGN UP</Link>
                </h2>
            </form >
        </>

    )
}

export default Form
