const router = express.Router()
import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'



//This returns you the user info plus a token
router.post('/login', authUser)

//Router.route means that we can use different methods for this route, liek get or post
//This allows us to use the same route to get, post or update date with the same route
// protect is middleware that checks if the token received by the user is valid
//For get request we have protect and getUserProfile, and for Put request we have protect and updateUserProfile
//we get the user info we need for getUserProfile from the protect middleware that decodes the body of the token sent by the react app
//This returns you the userInfo without a token and without the password
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

router.route('/').post(registerUser)

export default router