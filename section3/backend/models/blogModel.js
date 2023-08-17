//title:string
//description:string
//image:string
//content
const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    image : String,
    content : String
});

module.exports = model( 'blog', myschema );