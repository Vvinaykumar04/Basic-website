const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const Contact = require('../models/Contact');

// Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

// Contact Us page route
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});

// About Us page route
router.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'about-us.html'));
});

// Services page route
router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'services.html'));
});

router.post('/contact', async (req, res) => {
    if (!req.session || !req.session.user) {
        return res.status(401).send(`
            <h1>Unauthorized</h1>
            <p>Please <a href="/login">login</a> first to send a message.</p>
        `);
    }

    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.send(`<h1>Thanks, ${name}!</h1><p>Your message has been received.</p><a href="/">Back to Home</a>`);
    } catch (error) {
        res.status(500).send('An error occurred while saving your message.');
    }    
});

// Login route
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});


module.exports = router;