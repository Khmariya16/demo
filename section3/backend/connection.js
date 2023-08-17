const mongoose = require('mongoose');

const url = "mongodb+srv://mariyak9122:Mkhan16@cluster0.yu9klgw.mongodb.net/mydb?retryWrites=true&w=majority"


//asynchronous function:multiple action at once,returns a promise
mongoose.connect(url)

.then((result) => {
    console.log("databse connected")
})
.catch((err) => {
    console.log(err);
});



module.exports = mongoose;