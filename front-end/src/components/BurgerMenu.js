import React from 'react'

const BurgerMenu = ({ open, toggleMenu }) => {



    return (
        <div className="burger" onClick={toggleMenu}>
            <span id={open ? 'burger-span1-open' : 'burger-span1'} ></span>
            <span id={open ? 'burger-span2-open' : 'burger-span2'} ></span>
            <span id={open ? 'burger-span3-open' : 'burger-span3'} ></span>
        </div>
    )
}

export default BurgerMenu

