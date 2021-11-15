import React, { useState, useEffect } from "react"
import BurgerMenu from "./BurgerMenu"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { userLogout, getUserInfo } from "../actions/userAction"



const Header = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDetails = useSelector(state => state.userInfo)
    const { success } = userDetails

    const [open, setOpen] = useState(false)
    const [mobileView, setMobileView] = useState(false)



    //Mobile view prevents for nav-links-open class to being applied in desktop mode
    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth < 782) {
                setMobileView(true)
            } else {
                setMobileView(false)

            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)






    }, [mobileView])


    const toggleMenu = () => {
        open ? setOpen(false) : setOpen(true)
    }


    const logOut = () => {
        dispatch(userLogout())
        window.location.reload(true);
    }
    return (
        <header  >
            <nav>
                <Link className='title' to={`/`} >SHOP</Link>

                {   //If we are in mobile view
                    mobileView ?
                        (userInfo ?

                            <ul className={(open && mobileView) ? 'nav-links-open' : 'nav-links'}>
                                <div className='user'>
                                    <li onClick={toggleMenu}>  <Link to={`/profile`}>PROFILE</Link></li>
                                    <li onClick={toggleMenu}> <Link to={`/cart/:id?`} >CART</Link></li>
                                    <li onClick={toggleMenu}> <Link to={`/login`} onClick={logOut}>LOG OUT</Link></li>

                                </div>
                            </ul>
                            :
                            <ul className={(open && mobileView) ? 'nav-links-open' : 'nav-links'}>

                                <li onClick={toggleMenu}> <Link to={`/login`}>SIGN IN</Link></li>
                                <li onClick={toggleMenu}> <Link to={`/cart/:id?`} >CART</Link></li>


                            </ul>
                        )
                        :
                        //If we are in desktop mode
                        (userInfo ?

                            <ul className={(open && mobileView) ? 'nav-links-open' : 'nav-links'}>
                                <li> <i className="fas fa-shopping-cart"></i><Link to={`/cart/:id?`} >CART</Link></li>

                                <div className='user'>
                                    <li> <i className="fas fa-user"></i><Link to={`/profile`}>{userInfo.name}</Link></li>
                                    <div className="user-options">
                                        <Link to={`/profile`}>PROFILE</Link>
                                        <Link to={`/login`} onClick={logOut}>LOG OUT</Link>
                                    </div>
                                </div>
                            </ul>

                            :


                            <ul className={(open && mobileView) ? 'nav-links-open' : 'nav-links'}>
                                <li> <i className="fas fa-shopping-cart"></i><Link to={`/cart/:id?`} >CART</Link></li>
                                <li> <i className="fas fa-user"></i><Link to={`/login`}>SIGN IN</Link></li>
                            </ul>

                        )

                }

                <BurgerMenu open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
            </nav>
        </header>
    )
}

export default Header

