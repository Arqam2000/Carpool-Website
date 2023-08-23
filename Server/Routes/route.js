const express = require("express")
const router = express.Router()
const UserModel = require('../Models/User')

router.post("/signup", async (req, res) => {
    const { f_name, l_name, email, phone, password } = req.body
    if (f_name && l_name && email, phone && password) {
        let existingUser = await UserModel.findOne({ email: email })
        if (!existingUser) {
            UserModel.create({
                f_name, l_name, email, phone, password
            })
            .then(users => res.status(201).json({success: true, users}))
            .catch(err => res.status(500).json(err))
        } else {
            res.json("user already exists")
        }

    } else {
        res.status(400).json("Bad request")
    }

})

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        UserModel.findOne({ email: email })
            .then(async (user) => {
                if (user) {
                    if (password == user.password) {
                        res.json("Success")
                    }
                    else {
                        res.json("Incorrect Password")
                    }
                } else {
                    res.json("No Record Exists")
                }
            })
    } else {
        res.status(400).json({ error: "Bad request" })
    }

})

module.exports = router