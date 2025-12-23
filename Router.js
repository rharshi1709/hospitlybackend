import express from 'express'
import { getCategory, getDoctors, getSpecificCategory, getSpecificDoctor } from './Controllers/DoctorControllers.js'
import { signIn, signUp } from './Controllers/UserController.js'
import { contactUs } from './Controllers/ContactControllers.js'
const router = express.Router()

router.get('/doctors',getDoctors)
router.get('/doctor/:id',getSpecificDoctor)
router.get('/category',getCategory)
router.get('/category/:id',getSpecificCategory)
router.post('/signup',signUp)
router.post('/contact-us',contactUs)
router.post('/signin',signIn)

export default router