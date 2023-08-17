const express = require('express');
const Model = require('../models/userModel');


//initilizing router
const router = express.Router();

router.post('/add', (req ,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
});
router.get('/getall', (req ,res) => {
    Model.find({})/* match data */
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
});


/* /:colon denotes - parameter*/
router.get('/getbyemail/:email' , (req , res) => {
    /* find fun mtches all returns entries */
    /* findone matches matches fn and returns only first doc */
    console.log(req.params.email);
    Model.findOne({email:req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
})
router.get('/getbyid/:id', (req ,res) => {
    console.log(req.params.id);
    /* Model.findOne({_id:req.params.id}) */
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


router.delete('/delete/:id', (req ,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});



router.put('/update/:id', (req ,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});


module.exports = router;