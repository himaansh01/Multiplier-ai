const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://manikantamannalliker:himaansh01@cluster0.8cdpsbn.mongodb.net/login");

const userSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true,
        unique:true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,

    }
});

const User = mongoose.model('User', userSchema);

module.exports ={
    User
}