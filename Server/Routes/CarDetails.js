const express = require("express")
const router = express.Router()
const CarModel = require('../Models/CarModel')
const verifyToken = require("../middleware/authenticate")
const jwt = require("jsonwebtoken")
const secretKey = "secretKey"
const UserModel = require('../Models/User')

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

router.get("/car-details", verifyToken, async (req, res)=>{
    jwt.verify(req.token, secretKey, async (err, authData) => {
        if (err) {
          res.status(403).json({error: "invalid token"})
        } else {
            try {
                let carDetails = await CarModel.find()
                res.json(carDetails)
            } catch (error) {
                res.status(400).json("Bad request")
            }
        }
    })
    
})
router.get("/user/:id", verifyToken, async (req, res)=>{
    jwt.verify(req.token, secretKey, async (err, authData) => {
        if (err) {
          res.status(403).json({error: "invalid token"})
        } else {
            const {id} = req.params
            try {
                let user = await UserModel.findOne({_id: id})
                res.json(user)
            } catch (error) {
                res.status(400).json("Bad request")
            }
        }
    })
    
})



module.exports = router