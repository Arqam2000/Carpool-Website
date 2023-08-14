const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    f_name: String,
    l_name: String,
    email: String,
    phone: Number,
    password: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel