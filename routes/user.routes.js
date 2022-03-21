const express = require("express")
const user = require("../models/user.model")
const router = express.Router()

router.post("", async(req,res)=>{
    try {
        const createUser = await user.create(req.body);
        return res.status(201).send(createUser)
    } catch (error) {
        console.log(error)
    }
})

router.get("", async(req,res)=>{
    try {
        const user = await user.find().lean().exec()
        return res.status(200).send(createUser)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router