const express = require('express');


//initilizing router
const router = express.Router();

router.get('/addblog', (req ,res) => {
    res.send('addblog');
});
router.get('/getallblog', (req ,res) => {
    res.send('getallblog');
});
router.get('/getbyidblog', (req ,res) => {
    res.send('getbyidblog');
});
router.get('/deleteblog', (req ,res) => {
    res.send('deleteblog');
});
router.get('/updateblog', (req ,res) => {
    res.send('updateblog');
});


module.exports = router;