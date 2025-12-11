const Contact = require("../models/contact");

// GET all contacts
const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json({
    status: "success",
    data: contacts
  });
};

// ADD a new contact
const addContact = async (req, res) => {
  const { name, email } = req.body;
  const contact = await Contact.create({ name, email });
  res.json({
    status: "success",
    data: contact
  });
};

// DELETE a contact by ID
const deleteContact = async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  res.json({
    status: "success",
    message: "Contact deleted successfully"
  });
};

// UPDATE a contact by ID
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    id,
    { name, email },
    { new: true } 
  );
  res.json({
    status: "success",
    data: contact
  });
};
module.exports = {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact
};
