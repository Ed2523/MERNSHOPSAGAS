/*Simple middleware for handling exceptions(errors)
 inside of async express routes and passing them
 to your express error handlers, 
 with this, we dont need to use "try{}catch(){}" or ".then.catch" anymore 
for every route we have */
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


/*
Description: Authenticate the user and returns a token
route: POST /api/users/login
access Public
*/
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body


    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isTheUserAdmin,
            token: generateToken(user._id)

        })
    } else {
        res.status(401)
        throw new Error('Password or Email are not correct')
    }

})



/*
Description: Register new user
route: POST  /api/users
access Public
 */

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isTheUserAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

}

)




/*
Description: Gets user profile
route: GET /api/users/profile
access Private
*/
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isTheUserAdmin,
        })

    } else {
        res.status(404)
        throw new Error('User not found')

    }

})


export {
    authUser, getUserProfile, registerUser
}