import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header  >
            <nav>
                <Link className='title' to={`/`} >SHOP</Link>
                <ul className='nav-links'>
                    <li><Link to={`/`} >CART</Link></li>
                    <li><Link to={`/`}>SIGN IN</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
