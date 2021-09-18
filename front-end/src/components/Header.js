import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { userLogout } from "../actions/userAction"



const Header = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    if (!userLogin === null) { console.log(userInfo) }
    else { console.log('hey') }


    const logOut = () => {
        dispatch(userLogout())
    }

    return (
        <header  >
            <nav>
                <Link className='title' to={`/`} >SHOP</Link>
                <ul className='nav-links'>
                    <li> <i className="fas fa-shopping-cart"></i><Link to={`/cart/:id?`} >CART</Link></li>
                    {
                        (!userInfo) ?
                            <li> <i className="fas fa-user"></i><Link to={`/login`}>SIGN IN</Link></li>
                            :
                            <div className='user'>
                                <li> <Link to={`/login`}>{userInfo.name}</Link></li>
                                <div className="user-options">
                                    <Link to={`/`}>PROFILE</Link>
                                    <Link to={`/login`} onClick={logOut}>LOG OUT</Link>
                                </div>
                            </div>

                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
