// firstName (string, required, minimum length 3 and maximum length 30)
// lastName (string, optional, if given then minimum length 3 and maximum length 30)
// age (integer, required, should be between 1 and 150)
// email (string, required, unique)
// profileImages: (array of imageUrls and atleast 1 profile image is required)
// timestamps (string, required)

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{type:String , require:true , maxLength:30 , minLength:3},
    lastName:{type:String , require:false, maxLength:30 , minLength:3},
    age:{type:Number, require:true,range:{min:{type:Number ,min:1},max:{type:Number ,max:150}}},
    email:{type:String ,require:true,},
    profileImage:{type:String , require:true ,range:{min:{type:String ,min:1}}},
    bookId:{type:mongoose.Schema.Types.ObjectId, ref:"book", require:false}
},
{
    versionkey:false,
    timestamps:true,
})

module.exports = mongoose.model("user",userSchema)