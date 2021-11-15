import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
//Protect check that the token is valid, if not than the next argument function is not called
const protect = asyncHandler(async (req, res, next) => {
    let token

    //We receive in the headers a bearer token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // We save the token in the var 'token', remember that we need to divide the token from the word bearer in the header.authorization 
            //The token comes in the header authorization from the getUserInfo action creator in our react app
            token = req.headers.authorization.split(' ')[1]
            // We use the verify method to obtain the decoded version of the token, this method decodes the token using the JWT secret in our env file
            //This verify that the token is valid, but also it decodes the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Now that we have our decoded token, we use the id of the token to find a user with that id and store it in the req.user
            //After our token has been decoded we have access to the userInfo that is sent to the react app from the auth controller in the login route
            //We save the user that we found with the id from the decoded token into the req.user
            req.user = await User.findById(decoded.id).select('-password')//The .select prevents the password field to be shared in the token


            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized token failed')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Authorization denied, no token')
    }


})

export { protect }