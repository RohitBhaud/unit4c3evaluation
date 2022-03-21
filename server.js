const express = require("express")

const connectDB = require("./db")
const userRoutes = require("./routes/user.routes")
const bookRoutes = require("./routes/book.routes")

const app = express()
app.use(express.json())
app.use("/user",userRoutes)
app.use("/book",bookRoutes)



app.listen(3456, async()=>{
    try{
       await connectDB()
       console.log("listening on 3456")
    }
    catch(error){
        console.log(error)
    }
})