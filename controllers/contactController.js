const Contact = require("../models/Contact");
const { isValid } = require("../utils/utils");

const addContact = (req, res) => {
  const { name, number } = req.body;
  if (!isValid(number)) return res.status(404).json({ message: "Number is not valid." });
  const contact = new Contact({
    name,
    number,
  });
  contact.save((error, contact) => {
    if (error) console.log(error);
    if (contact) return res.status(201).json({ message: "Contact created successfully!" });
  });
};

const getContacts = (req, res) => {
  Contact.find((error, contacts) => {
    if (error) console.log(error);
    if (contacts) return res.status(200).json({ contacts: contacts });
  });
};

const getContactByNumber = (req, res) => {
  const number = req.params.number;
  if (!isValid(number)) return res.status(404).json({ message: "Number is not valid." });
  Contact.findOne({ number: number }, (error, contact) => {
    if (error) console.log(error);
    if (contact) {
      return res.status(200).json({ contact: contact });
    } else {
      return res.status(204).json({ message: "No contact was found!" });
    }
  });
};

module.exports = {
  addContact,
  getContacts,
  getContactByNumber,
};
