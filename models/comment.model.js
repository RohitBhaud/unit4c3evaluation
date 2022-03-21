const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    body:{type:Number , require:true},
  
},
{
    versionkey:false,
    timestamps:true,
})
module.exports = mongoose.model("comment",commentSchema)