import express from 'express';
import userControllers from '../controllers/userControllers.js'
import {isAuth} from '../middleware/auth.js'

const router = express.Router();

router.post('/register', userControllers.register)
router.post('/login', userControllers.login)
router.post('/forgotPassword', userControllers.forgotPassword)
router.put('/resetPassword', userControllers.resetPassword)

//for admin
router.route('/getProfile')
      .get(isAuth, userControllers.getProfile)


export default router;