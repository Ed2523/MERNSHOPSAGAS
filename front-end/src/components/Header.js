import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header  >
            <nav>
                <Link className='title' to={`/`} >SHOP</Link>
                <ul className='nav-links'>
                    <li> <i className="fas fa-shopping-cart"></i><Link to={`/cart/:id?`} >CART</Link></li>
                    <li> <i className="fas fa-user"></i><Link to={`/`}>SIGN IN</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
