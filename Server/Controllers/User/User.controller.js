const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../Models/User.model");
const { registerValidator, loginValidator } = require("./Validator");
const mailer = require("../Utilities/SendGridMailer");

var UserController = {
  signUp: async (req, res) => {
    try {
      await registerValidator(req.body);

      // VERIFICANDO QUE YA HAYA VENCIDO SU TOKEN
      const repeatUser = await User.findOne({ $and: [{username: req.body.username}, { email: req.body.email }] })

      console.log({ repeatUser })

      if(repeatUser && !repeatUser.active) {
        const newToken = jwt.sign(
          { _id: repeatUser._id },
          process.env.TOKEN_REGISTER_KEY,
          { expiresIn: "15m" }
        );

        const newRegisterEmail = {
          to: req.body.email,
          from: process.env.MAIL,
          subject: "Por favor verifica tu cuenta",
          html: `
               <h2>Hola ${req.body.username}</h2>
               <h3>Estamos felices de que te incorpores </h3>
               <br /><br />
               <p>Si no confirmas tu dirección de correo electrónico en un maximo tiempo de 15 minutos, es necesario rellenar los campos para lograr registrarte nuevamente. </p>
               
               <p>Para verificar tu cuenta accede al siguiente enlace:</p>
               <a href="${process.env.CLIENT_URL}/Auth/${newToken}">Verificar cuenta</a>
          `,
        };

        await mailer(newRegisterEmail);

        return res
          .header("Register", newToken)
          .status(201)
          .json({ error: false, message: "Correo enviado exitosamente" });
      }

      // GENERAL
      const notUnique = await User.find({
        $or: [{ username: req.body.username }, { email: req.body.email }],
      });

      if (notUnique.length) throw "El usuario o correo ya existe";

      const hashedPassword = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.SALT)
      );

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        active: false,
      });

      await newUser.save();

      const token = jwt.sign(
        { _id: newUser._id },
        process.env.TOKEN_REGISTER_KEY,
        { expiresIn: "15m" }
      );

      const registerEmail = {
        to: req.body.email,
        from: process.env.MAIL,
        subject: "Por favor verifica tu cuenta",
        html: `
             <h2>Hola ${req.body.username}</h2>
             <h3>Estamos felices de que te incorpores </h3>
             <br /><br />
             <p>Si no confirmas tu dirección de correo electrónico en un maximo tiempo de 15 minutos, es necesario rellenar los campos para lograr registrarte nuevamente. </p>
             
             <p>Para verificar tu cuenta accede al siguiente enlace:</p>
             <a href="${process.env.CLIENT_URL}/Auth/${token}">Verificar cuenta</a>
        `,
      };

      await mailer(registerEmail);

      return res
        .header("Register", token)
        .status(201)
        .json({ error: false, message: "Correo enviado exitosamente" });
    } catch (err) {
      return res
        .status(400)
        .json({
          error: true,
          message: err.details != null ? err.details[0].message : err,
        });
    }
  },
  signUpHandler: async (req, res) => {
    try {
      const token = req.header("Register");

      if (!token) throw "Access Denied";

      const verifiedToken = jwt.verify(token, process.env.TOKEN_REGISTER_KEY);

      if (!verifiedToken) throw "Access Denied";

      const user = await User.findOne({ _id: verifiedToken._id });

      if (!user) throw "Sucedio un error";

      await User.findOneAndUpdate({ _id: verifiedToken._id }, { active: true });

      return res
        .status(200)
        .json({
          error: false,
          message: "Usuario registrado",
          username: user.username,
        });
    } catch (err) {
      return res.status(500).json({ error: true, message: err });
    }
  },
  requestPassword: async (req, res) => {
    try {
      const user = await User.findOne({
        $or: [{ username: req.body.data }, { email: req.body.data }],
      });

      if (!user) throw "Username or email do not exist";

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_RESET_KEY, {
        expiresIn: "15m",
      });

      const resetPasswordEmail = {
        to: user.email,
        from: process.env.MAIL,
        subject: "Reset password",
        html: `
        <h1>Hola ${user.username}</h1>
        <p>Se ha enviado el correo para restablecer la contraseña, el restablecimiento de contraseña tiene un límite de 15 minutos.</p>
        <br />
        <p>Si no restableces tu contraseña en los próximos 15 minutos, tendrás que volver a enviar de nuevo la solicitud.</p>
        <br />
        <p>Para completar el proceso de restablecimiento de contraseña, visita el siguiente enlace:</p>

        <a href="${process.env.CLIENT_URL}/Auth/recovery-password/${token}">Restablecer contraseña</a>
        `,
      };

      await mailer(resetPasswordEmail);

      return res
        .header("Reset", token)
        .status(200)
        .json({ error: false, message: "Correo enviado exitosamente" });
    } catch (err) {
      return res.status(500).json({ error: true, message: err });
    }
  },
  requestPasswordHandler: async (req, res) => {
    try {
      const token = req.header("Reset");

      if (!token) throw "Acceso denegado";

      const verifiedToken = jwt.verify(token, process.env.TOKEN_RESET_KEY);

      if (!verifiedToken) return "Acceso denegado";

      const user = await User.findOne({ _id: verifiedToken._id });

      if (!user) throw "Algo sucedio mal";

      const newHashedPassword = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.SALT)
      );

      await User.findOneAndUpdate(
        { _id: user._id },
        { password: newHashedPassword }
      );

      return res
        .status(200)
        .json({ error: false, message: "Contraseña cambiada exitosamente" });
    } catch (err) {
      return res.status(500).json({ error: true, message: err });
    }
  },
  login: async (req, res) => {
    try {
      await loginValidator(req.body);

      const user = await User.findOne({ email: req.body.email });

      if (!user) throw "Email and password do not match";

      //comparando
      const logged = await bcrypt.compare(req.body.password, user.password);
      if (!logged) throw "Email and password do not match";

      //token para ser usado para cosas privadas
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY);

      return res
        .status(200)
        .json({ error: false, message: "Successfuly", token });
    } catch (err) {
      return res.status(400).json({ error: true, message: err });
    }
  },
};

module.exports = UserController;
