const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

const { addContact, getContacts, getContactByNumber } = contactController;

router.post("/create", addContact);
router.get("/contacts", getContacts);
router.get("/contact/:number", getContactByNumber);

module.exports = router;
