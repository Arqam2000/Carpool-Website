const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/User')
const uri = "mongodb+srv://jedasow785:UXvgVYIEtbUwBCZA@cluster0.rkwqjvs.mongodb.net/Users?retryWrites=true&w=majority"

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(uri)

app.post('/', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen('3001',() => {
    console.log("Server is listening at port 3001")
})