const express = require("express")
const router = express.Router()
const CarModel = require('../Models/CarModel')
const verifyToken = require("../middleware/authenticate")
const jwt = require("jsonwebtoken")
const secretKey = "secretKey"

router.post("/car-details", verifyToken, async(req, res) => {
    jwt.verify(req.token, secretKey, async (err, authData) => {
        if (err) {
          res.status(403).json({error: "invalid token"})
        } else {
            const { carModel, carName, sittCap, trip, startPoint, destPoint, goingTime, returnTime, days, price, desc, img  } = req.body
            if (carModel && carName && sittCap && trip && startPoint && destPoint && goingTime && returnTime && days && price && desc && img){
                let existing = await CarModel.findOne({user_id: authData, carName})
                if(existing){
                    res.json("Already stored")
                } else {
                    let carDetails = await CarModel.create({
                        user_id: authData, carModel, carName, sittCap, trip, startPoint, destPoint, goingTime, returnTime, days, price, desc, img
                    })
                    res.status(201).json({success: true, data: carDetails})
                }
            } else {
                res.status(400).json("Bad Request")
            }
        }
    }) 
})

module.exports = router