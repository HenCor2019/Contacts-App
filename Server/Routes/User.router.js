const express = require('express')
const {signUp , signUpHandler, requestPassword, requestPasswordHandler } = require('../Controllers/User/User.controller')

const router = express.Router()

//metodos del usuario
router.post('/register', signUp)

// verificación del usuario
router.get('/register-verify', signUpHandler)

// recuperacion de contraseña
router.post('/request-password', requestPassword)

// manejador de contraseña
router.post('/recovery-password', requestPasswordHandler)

module.exports = router
