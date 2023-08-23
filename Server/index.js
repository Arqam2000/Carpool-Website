const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const uri = "mongodb+srv://jedasow785:UXvgVYIEtbUwBCZA@cluster0.rkwqjvs.mongodb.net/Users?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(uri)

const route = require("./Routes/route")

app.use("/", route)


app.listen(3001,() => {
    console.log("Server is listening at port 3001")
})