const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter username"],
        },
        phone:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:[true,"Please enter email"]
        },
        image:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User',userSchema);

//export model
module.exports = User;