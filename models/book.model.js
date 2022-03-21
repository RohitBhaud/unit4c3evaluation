// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)

const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    likes:{type:Number , require:true, default:0},
    coverImage:{type:String , require:true ,range:{max:{type:String ,max:1}}},
    age:{type:Number, require:true},
    email:{type:String ,require:true,},
},
{
    versionkey:false,
    timestamps:true,
})
module.exports = mongoose.model("book",bookSchema)
