const router = express.Router()
import express from 'express'
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'




router.post('/login', authUser)

//Router.route means that we can use different methods for this route, liek get or post
//This allows us to use the same route to get, post or update date with the same route
router.route('/profile').get(protect, getUserProfile)

router.route('/').post(registerUser)

export default router