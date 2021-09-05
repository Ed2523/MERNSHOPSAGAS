import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'
import Form from '../components/Form'

const LoginScreen = ({ location }) => {

    return (
        <div className='login-screen'>
            <Form location={location} />
        </div>
    )
}

export default LoginScreen
