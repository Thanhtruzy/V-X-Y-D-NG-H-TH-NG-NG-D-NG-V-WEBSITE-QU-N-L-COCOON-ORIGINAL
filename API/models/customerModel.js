const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
