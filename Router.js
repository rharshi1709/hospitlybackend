import express from 'express'
import { getCategory, getDoctors, getSpecificCategory, getSpecificDoctor } from './Controllers/DoctorControllers.js'
import { signIn, signUp } from './Controllers/UserController.js'
import { contactUs } from './Controllers/ContactControllers.js'
import { appointment, getAppointment } from './Controllers/AppointmentController.js'
// import Admin from './Controllers/AdminController.js'
import { getHospital, getSpecificDoctorFromSpecificHospital, getSpecificHospital } from './Controllers/HospitalController.js'
const router = express.Router()

router.get('/doctors',getDoctors)
router.get('/doctor/:id',getSpecificDoctor)
router.get('/category',getCategory)
router.get('/category/:id',getSpecificCategory)
router.post('/signup',signUp)
router.post('/contact-us',contactUs)
router.post('/appointment',appointment)
router.get('/appointment/:email',getAppointment)
router.post('/signin',signIn)
router.get('/hospitals',getHospital)
router.get('/hospitals/:id',getSpecificHospital)
// router.post('/admin',Admin)
router.get('/hospitals/:id/doctor/:name',getSpecificDoctorFromSpecificHospital)

export default router