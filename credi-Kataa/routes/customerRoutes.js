const express = require('express');
const { addCustomer, getCustomers } = require('../controllers/customerController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, addCustomer);
router.get('/', auth, getCustomers);

module.exports = router;