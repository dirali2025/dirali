const express = require('express');
const app = express();
const port = 2025;
app.use(express.json());

const apartmentController = require('./Controllers/Apartment.controller.js');
const customerController = require('./Controllers/Customer.controller.js');

const connectDB = require('./DB/connectDB');
connectDB();
app.use("/apartment", apartmentController);
app.use("/customer", customerController);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});