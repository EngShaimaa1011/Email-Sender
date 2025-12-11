const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact
} = require("../controllers/contactController");

// Routes
router.get("/", getAllContacts);
router.post("/", addContact);
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);

module.exports = router;
