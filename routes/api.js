const express = require('express');
const router = express.Router();

//get models;
const Pirat = require('../model/pirat');

Pirat.methods(['get', 'post', 'put', 'delete']);
Pirat.register(router, '/pirates');

module.exports = router;