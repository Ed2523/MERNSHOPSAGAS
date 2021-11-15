import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    //  This receives an object with an id, a secret thaty it is use to generate our encrypt token, and an expiration date for this new token
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

export default generateToken