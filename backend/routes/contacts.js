// Contact endpoints

const express = require('express');
const contactsController = require('../controllers/contacts');
const router = express.Router();



router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getOneContact);

module.exports = router;