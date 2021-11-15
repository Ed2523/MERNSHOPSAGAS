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
    //This if statement validates that ther is a user and that the password of this user is the same password in the database, it does this usins the matchPassword method in our userModel
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isTheUserAdmin,//This is a boolean
            token: generateToken(user._id)//It generates a token using the generaToken and our utils folder

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

    //if user didn't exist, then we create one using User.create with name, email and password from the req body
    const user = await User.create({
        name,
        email,
        password
    })

    /*After the user is created we sent back a 201 status message, this means something 
    was created, alongside we also send a json with the info of the new user created
    with a new generated jwt token.
    */
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



/*
Description: Update user profile
route: PUT /api/users/profile
access Private
*/
const updateUserProfile = asyncHandler(async (req, res) => {
    //req.user._id this comes from the protect middleware, after tha token validation was successful
    const user = await User.findById(req.user._id)
    //If there is a user in our data base we the _id we received in the req.body
    if (user) {
        //Than we update the user properties to whatever values we receive from the req.body
        //If there is not a specific value from the req.body, we just set the value already stored in the user
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }
        //We save our user with .save
        const updatedUser = await user.save()//On the save method our new password is encrypted
        //We send back the updated userInfo as a response jason, with a generate token
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isTheUserAdmin,
            token: generateToken(updatedUser._id)

        })

    } else {
        res.status(404)
        throw new Error('User not found')

    }

})




export { authUser, getUserProfile, registerUser, updateUserProfile }