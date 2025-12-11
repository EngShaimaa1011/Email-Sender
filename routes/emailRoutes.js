const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/emailController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/send", upload.array("files", 5), sendEmail); 

module.exports = router;
