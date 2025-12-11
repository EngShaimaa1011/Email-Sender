require('dotenv').config();
require('express-async-errors');
const express = require('express');
const mongoose = require("mongoose");
const emailRoutes = require('./routes/emailRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(express.json());

// mongo db connection 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//  Routes
app.use('/api/email', emailRoutes);
app.use('/api/contacts', contactRoutes);

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT , () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
