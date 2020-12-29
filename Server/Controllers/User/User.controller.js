const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../Models/User.model')
const {registerValidator} = require('./Validator')
const mailer = require('../Utilities/SendGridMailer')


var UserController = {
  SignUp: async (req, res) => {
    try{

      await registerValidator(req.body)

      const notUnique = await User.find({ $or: [{username: req.body.username}, { email: req.body.email }] })

      if(notUnique.length)
         throw 'El usuario o correo ya existe'

      const hashedPassword =  await bcrypt.hash(req.body.password, parseInt(process.env.SALT))

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        active: false
      })

      await newUser.save()

      const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_REGISTER_KEY, { expiresIn: '15m' })

      const registerEmail = {
        to: req.body.email,
        from: process.env.MAIL,
        subject: 'Por favor verifica tu cuenta',
        html: `
             <h2>Hola ${req.body.username}</h2>
             <h3>Estamos felices de que te incorpores </h3>
             <p>Para verificar tu cuenta accede al siguiente enlace:</p>
             <a href="${process.env.CLIENT_URL}/Auth/${token}">Verificar cuenta</a>
        `
      }

      await mailer(registerEmail)

      return res.header('register', token).status(201).json({ error: false, message: 'Correo enviado exitosamente' })

    } catch( err ) {
      return res.status(400).json({error:true, message:err.details != null ? err.details[0].message : err}) 

    }
  }
}

module.exports = UserController
