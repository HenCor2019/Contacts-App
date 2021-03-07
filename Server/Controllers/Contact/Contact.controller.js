const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../Models/User.model");
const { generate } = require("generate-password");
const { contactValidator } = require("./Validator");
const Contact = require("../../Models/Contact.model");
const mailer = require("../Utilities/SendGridMailer");

var ContactController = {
  createContact: async (req, res) => {
    try {
      await contactValidator(req.body);

      const token = req.header("Author");

      if (!token) throw "Access denied";

      const verifiedToken = jwt.verify(token, process.env.TOKEN_KEY);

      if (!verifiedToken) throw "Access Denied";

      const contacts = await Contact.find({
        $and: [{ author: verifiedToken._id }, { name: req.body.name }],
      });

      if (contacts.length) throw "Name is already used on this account";

      const newContact = new Contact({
        name: req.body.name,
        number: req.body.number || "Desconocido",
        email: req.body.email || "Desconocido",
        author: verifiedToken._id,
      });

      await newContact.save();

      return res.status(201).json({
        error: false,
        message: "New contact Added",
        _id: newContact._id,
      });
    } catch (err) {
      return res.status(400).json({ error: true, message: err });
    }
  },
  getContacts: async (req, res) => {
    try {
      const token = req.header("Author");

      if (!token) throw "Access denied";

      const verifiedToken = jwt.verify(token, process.env.TOKEN_KEY);

      if (!verifiedToken) throw "Access Denied";

      const { page, limit = 7 } = req.query;

      const contacts = await Contact.find({ author: verifiedToken._id })
        .skip(limit * (page - 1))
        .limit(parseInt(limit))
        .exec();

      const totalContacts = await Contact.countDocuments({
        author: verifiedToken._id,
      });

      return res
        .status(200)
        .json({
          error: false,
          contacts,
          cantity: totalContacts.length,
          pages: Math.ceil(totalContacts / limit),
        })
        .end();
    } catch (err) {
      return res
        .status(500)
        .json({ error: true, message: "Algo malo sucedio" })
        .end();
    }
  },
  getContactsGoogle: async (req, res) => {
    try {
      const token = req.header("Google");

      if (!token) throw "Access denied";

      const verifiedGoogleToken = jwt.decode(token);

      const user = await User.findOne({ email: verifiedGoogleToken.email });

      if (!user) {
        const newPassword = generate({
          length: 15,
          numbers: true,
        });

        const hashedPassword = await bcrypt.hash(
          newPassword,
          parseInt(process.env.SALT)
        );

        const newGoogleUser = new User({
          email: verifiedGoogleToken.email,
          username: verifiedGoogleToken.name,
          password: hashedPassword,
          active: true,
        });

        await newGoogleUser.save();

        const newTokenGoogle = jwt.sign(
          {
            _id: newGoogleUser._id,
            username: newGoogleUser.username,
            email: newGoogleUser.email,
          },
          process.env.TOKEN_KEY
        );

        const messageGoogle = {
          to: newGoogleUser.email,
          from: process.env.MAIL,
          subject: "Bienvenido a HenCor contactos",
          html: `
        <h2>Hola ${newGoogleUser.username}</h2>
        <h3>Estamos felices de que te incorpores a nosotros </h3>
        <br />
        <p>Se ha creado de manera automática tu contraseña para accedas a nuestra aplicación de manera independiente a google.</p>
        <p>contraseña:<strong>${newPassword}</strong></p>
        <p>Recuerda que puedes restablecer tu contraseña en el momento que desees.</p>
        `,
        };

        await mailer(messageGoogle);

        return res
          .status(200)
          .json({
            error: false,
            token: newTokenGoogle,
          })
          .end();
      }

      const tokenGoogle = jwt.sign(
        {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.TOKEN_KEY
      );

      return res
        .status(200)
        .json({
          error: false,
          token: tokenGoogle,
        })
        .end();
    } catch (err) {
      return res
        .status(500)
        .json({ error: true, message: "Algo malo sucedio" })
        .end();
    }
  },
};

module.exports = ContactController;
