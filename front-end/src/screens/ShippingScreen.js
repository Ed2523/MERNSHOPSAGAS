import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ShippingScreen = ({ }) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = () => {

    }

    return (
        <div className='shipping-screen'>
            <h1 id='shipping-title'>SHIPPING</h1>
            <form className="form" onSubmit={submitHandler}>
                <label >
                    <h1>Address: </h1>
                    <input type="text"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                        placeholder='Enter Address' />
                </label>
                <label >
                    <h1>City: </h1>
                    <input type="text"
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        required
                        placeholder='Enter Address' />
                </label>
                <label >
                    <h1>Address: </h1>
                    <input type="text"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                        placeholder='Enter Address' />
                </label>
                <label >
                    <h1>Address: </h1>
                    <input type="text"
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        required
                        placeholder='Enter Address' />
                </label>
            </form>
        </div>
    )
}

export default ShippingScreen
