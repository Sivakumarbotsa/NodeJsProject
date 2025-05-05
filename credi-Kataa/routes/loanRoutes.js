const express = require('express');
const { createLoan, getLoans } = require('../controllers/loanController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, createLoan);
router.get('/', auth, getLoans);

module.exports = router;