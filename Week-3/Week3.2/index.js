
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Sravan:Sravan%4028@cluster0.7mrce.mongodb.net/")



const User = mongoose.model('Users', { name: String,email : String,password:String });

const user = new User({
     name: 'Harkirat Singh',
     email:'tzirw@example.com',
     password:'123456'
     });
user.save();