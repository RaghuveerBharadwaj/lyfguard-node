const express = require('express')

const auth = require("../middlewares/auth")

const userController = require('../controllers/users')
const agencyController = require('../controllers/agencies')
const ambulanceController = require('../controllers/ambulances')
const branchController = require('../controllers/branches')
const bloodBankController = require('../controllers/blood_banks')
const bookingController = require('../controllers/bookings')
const countryController = require('../controllers/countries')
const emergencyController = require('../controllers/emergencies')
const hospitalController = require('../controllers/hospitals')
const routeController = require('../controllers/routes')
const serviceController = require('../controllers/services')

const router = express.Router()

// Agency Routes
router.get('/agency/options', auth, agencyController.listAgencyOptions)
router.post('/agency/list', auth, agencyController.listAgencies)
router.post('/agency/create', auth, agencyController.createAgency)
router.get('/agency/view/:id', auth, agencyController.viewAgency)
router.post('/agency/edit/:id', auth, agencyController.editAgency)
router.delete('/agency/delete/:id', auth, agencyController.deleteAgency)

// Ambulance Routes
router.post('/ambulance/list', auth, ambulanceController.listAmbulances)
router.post('/ambulance/create', auth, ambulanceController.createAmbulance)
router.get('/ambulance/view/:id', auth, ambulanceController.viewAmbulance)
router.post('/ambulance/edit/:id', auth, ambulanceController.editAmbulance)
router.delete('/ambulance/delete/:id', auth, ambulanceController.deleteAmbulance)

// Branch Routes
router.get('/branch/options', auth, branchController.listBranchOptions)
router.post('/branch/list', auth, branchController.listBranches)
router.post('/branch/create', auth, branchController.createBranch)
router.get('/branch/view/:id', auth, branchController.viewBranch)
router.post('/branch/edit/:id', auth, branchController.editBranch)
router.delete('/branch/delete/:id', auth, branchController.deleteBranch)

// Booking Routes
router.post('/booking/list', auth, bookingController.listBookings)
router.post('/booking/create', auth, bookingController.createBooking)
router.get('/booking/view/:id', auth, bookingController.viewBooking)
router.post('/booking/edit/:id', auth, bookingController.editBooking)
router.delete('/booking/delete/:id', auth, bookingController.deleteBooking)

// Blood Bank Routes
router.post('/blood_bank/list', auth, bloodBankController.listBloodBanks)
router.post('/blood_bank/create', auth, bloodBankController.createBloodBank)
router.get('/blood_bank/view/:id', auth, bloodBankController.viewBloodBank)
router.post('/blood_bank/edit/:id', auth, bloodBankController.editBloodBank)
router.delete('/blood_bank/delete/:id', auth, bloodBankController.deleteBloodBank)

// Country Routes
router.get('/country/options', auth, countryController.listCountryOptions)
router.post('/country/list', auth, countryController.listCountries)
router.post('/country/create', auth, countryController.createCountry)
router.get('/country/view/:id', auth, countryController.viewCountry)
router.post('/country/edit/:id', auth, countryController.editCountry)
router.delete('/country/delete/:id', auth, countryController.deleteCountry)

// Hospital Routes
router.get('/hospital/options', auth, hospitalController.listHospitalOptions)
router.post('/hospital/list', auth, hospitalController.listHospitals)
router.post('/hospital/create', auth, hospitalController.createHospital)
router.get('/hospital/view/:id', auth, hospitalController.viewHospital)
router.post('/hospital/edit/:id', auth, hospitalController.editHospital)
router.delete('/hospital/delete/:id', auth, hospitalController.deleteHospital)

// Emergency Routes
router.post('/emergency/list', auth, emergencyController.listEmergencies)
router.post('/emergency/create', auth, emergencyController.createEmergency)
router.get('/emergency/view/:id', auth, emergencyController.viewEmergency)
router.post('/emergency/edit/:id', auth, emergencyController.editEmergency)
router.delete('/emergency/delete/:id', auth, emergencyController.deleteEmergency)

// Route Routes
router.post('/route/list', auth, routeController.listRoutes)
router.post('/route/create', auth, routeController.createRoute)
router.get('/route/view/:id', auth, routeController.viewRoute)
router.post('/route/edit/:id', auth, routeController.editRoute)
router.delete('/route/delete/:id', auth, routeController.deleteRoute)

// Service Routes
router.post('/service/list', auth, serviceController.listServices)
router.post('/service/create', auth, serviceController.createService)
router.get('/service/view/:id', auth, serviceController.viewService)
router.post('/service/edit/:id', auth, serviceController.editService)
router.delete('/service/delete/:id', auth, serviceController.deleteService)

// User Routes
router.post('/login', userController.login)
router.post('/loginOTP', userController.loginByOTP)
router.post('/user/options', userController.listUserOptions)
router.post('/user/list', userController.listUsers)
router.post('/user/create', userController.createUser)
router.get('/user/view/:id', userController.viewUser)
router.post('/user/edit/:id', userController.editUser)
router.delete('/user/delete/:id', userController.deleteUser)

module.exports = router