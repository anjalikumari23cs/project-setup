import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        select:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,  
    //going to send link to user email for verification ,
    // link ke through token bhejenge, 
    // token apne pass rahega firr update krrdenge isverified true karke

    resetToken:String,
    resetTokenExpiry:Date,

    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }

},{
    timestamps:true
});

module.exports=mongoose.model('User', userSchema);