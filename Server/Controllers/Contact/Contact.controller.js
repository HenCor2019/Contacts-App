const Contact = require("../../Models/Contact.model");
const jwt = require("jsonwebtoken");
const { contactValidator } = require("./Validator");

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

      return res
        .status(201)
        .json({ error: false, message: "New contact Added", _id: newContact._id });
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

      const { page , limit = 7 } = req.query;

      const contacts = await Contact.find({ author: verifiedToken._id }).skip(limit*(page-1)).limit(parseInt(limit)).exec()

      const totalContacts = await Contact.countDocuments({ author: verifiedToken._id })

      return res
        .status(200)
        .json({ error: false, contacts, cantity: totalContacts.length, pages: Math.ceil(totalContacts/limit) });
    } catch (err) {
      res.status(400).json({ error: true, message: "Algo malo sucedio" });
    }
  },
};

module.exports = ContactController;
