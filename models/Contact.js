const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {},
    email: {},
    message: {},
    createdAt: {}
});

module.exports = mongoose.model('Contacts', contactSchema);