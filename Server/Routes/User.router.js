const express = require('express')
const {signUp , signUpHandler } = require('../Controllers/User/User.controller')

const router = express.Router()

//metodos del usuario
router.post('/register', signUp)

// verificación del usuario
router.get('/register-verify', signUpHandler)

module.exports = router
