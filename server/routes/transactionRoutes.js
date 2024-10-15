const express = require('express');
const { addTransaction, getBalanceSheet } = require('../controllers/transactionController')

const transactionRoutes = express.Router();

transactionRoutes.post('/transaction', addTransaction)
transactionRoutes.get('/balacesheet', getBalanceSheet)

module.exports = transactionRoutes;