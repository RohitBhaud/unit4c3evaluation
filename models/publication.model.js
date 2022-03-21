const mongoose = require("mongoose")

const publicationSchema = mongoose.Schema({
    name:{type:Number , require:true},
},
{
    versionkey:false,
    timestamps:true,
})
module.exports = mongoose.model("publication",publicationSchema)