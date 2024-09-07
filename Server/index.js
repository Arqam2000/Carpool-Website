const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const uri = "mongodb+srv://jedasow785:UXvgVYIEtbUwBCZA@cluster0.rkwqjvs.mongodb.net/Users?retryWrites=true&w=majority"
const app = express()
const path = require('path')
const route = require("./Routes/auth")
const car_route = require("./Routes/CarDetails")

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use("/", route)
app.use("/", car_route)

mongoose.connect(uri)
.then(() => console.log("Mongodb Connected Successfully"))
.catch((err) => console.log("Mongodb connection failed", err))

app.get("/", (req, res) => {
    res.status(200).json({success: true, data: {}, message: "Server is running..."})
})

app.listen(3001,() => {
    console.log("Server is listening at port 3001")
})
