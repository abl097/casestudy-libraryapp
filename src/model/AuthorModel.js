const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@casestudy-errorhunt.yrova.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{
    useUnifiedTopology:true,   //--Part #2 Point 10--//
    useNewUrlParser:true,
});

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;