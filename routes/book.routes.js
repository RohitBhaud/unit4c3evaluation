const express = require("express")
const user = require("../models/book.model")
const router = express.Router()

router.post("", async(req,res)=>{
    try {
        const bookcreate = await book.create(req.body);
        return res.status(201).send(bookcreate)
    } catch (error) {
        console.log(error)
    }
})

router.get("", async(req,res)=>{
    try {
        const bookread = await book.find().lean().exec()
        return res.status(200).send(bookread)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router