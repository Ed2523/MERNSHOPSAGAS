import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Form = ({ location }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let redirect = location.search ? location.search.split('=')[1] : '/'

    const submitHandler = (e) => {
        e.preventDefault()
        sessionStorage.setItem('sign in info', {
            userEmail: email,

        })
    }

    return (

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
                    name="email"

                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='Enter password' />
            </label>
            <button className='sign-in' type='submit'>SIGN IN</button>
            <h2 >    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>SIGN UP</Link>
            </h2>
        </form >

    )
}

export default Form
