const express = require('express');


//initilizing router
const router = express.Router();

router.get('/addblock', (req ,res) => {
    res.send('addblock');
});
router.get('/getallblock', (req ,res) => {
    res.send('Response from user getall');
});
router.get('/getbyidblock', (req ,res) => {
    res.send('Response from user getbyid');
});
router.get('/deleteblock', (req ,res) => {
    res.send('Response from user delete');
});
router.get('/updateblock', (req ,res) => {
    res.send('Response from user update');
});


module.exports = router;