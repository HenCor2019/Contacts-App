const express = require('express')
const { SignUp } = require('../Controllers/User/User.controller')

const router = express.Router()

//metodos del usuario
router.post('/register', SignUp)

module.exports = router
