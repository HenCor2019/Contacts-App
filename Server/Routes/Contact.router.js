const express = require("express");
const {
  createContact,
  getContacts,
} = require("../Controllers/Contact/Contact.controller");

const router = express.Router();

// crear un nuevo contacto
router.post("/create-contact", createContact);

// obteniendo post de un autor
router.get("/get-contacts", getContacts);

module.exports = router;
