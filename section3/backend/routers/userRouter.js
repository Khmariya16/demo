const express = require('express');
const Model = require('../models/userModel');


//initilizing router
const router = express.Router();

router.post('/add', (req ,res) => {
    res.send('Response from user add');
});
router.get('/getall', (req ,res) => {
    res.send('Response from user getall');
});
router.get('/getbyid', (req ,res) => {
    res.send('Response from user getbyid');
});
router.get('/delete', (req ,res) => {
    res.send('Response from user delete');
});
router.get('/update', (req ,res) => {
    res.send('Response from user update');
});


module.exports = router;