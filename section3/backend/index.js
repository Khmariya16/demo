//import express

const express = require('express');


//initilize express app
const app = express();
const port = 5000;

app.listen(port ,  () => { console.log('server started')});