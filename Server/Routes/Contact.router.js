const express = require("express");
const {
  createContact,
  getContacts,
  getContactsGoogle,
} = require("../Controllers/Contact/Contact.controller");

const router = express.Router();

// crear un nuevo contacto
router.post("/create-contact", createContact);

// obteniendo post de un autor
router.get("/get-contacts", getContacts);

// obteniendo post de un usuario de google
router.get("/get-contacts-by-google", getContactsGoogle);

module.exports = router;
