const Contact = require("../models/Contact");

const addContact = (req, res) => {
  const { name, number } = req.body;
  const contact = new Contact({
    name,
    number,
  });
  contact.save((error, contact) => {
    if (error) console.log(error);
    if (contact) return res.json({ message: "Contact created successfully!" });
  });
};

const getContacts = (req, res) => {
  Contact.find((error, contacts) => {
    if (error) console.log(error);
    if (contacts) return res.json({ contacts: contacts });
  });
};

const getContactByNumber = (req, res) => {
  const number = req.params.number;
  Contact.findOne({ number: number }, (error, contact) => {
    if (error) console.log(error);
    if (contact) return res.json({ contact: contact });
  });
};

module.exports = {
  addContact,
  getContacts,
  getContactByNumber,
};
