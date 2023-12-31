const express = require('express');
const Model = require('../models/blogModel')


//initilizing router
const router = express.Router();

router.post('/addblog', (req ,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.get('/getallblog', (req ,res) => {
    Model.find({})/* match data */
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.get('/getbyidblog/:id', (req ,res) => {
    console.log(req.params.id)
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.delete('/deleteblog/:id', (req ,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.put('/updateblog/:id', (req ,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


module.exports = router;