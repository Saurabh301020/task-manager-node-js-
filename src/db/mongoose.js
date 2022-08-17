const mongoose = require('mongoose')
const validator=require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true
    // useCreateIndex:true
})

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be +ve!')
            }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('pasword cannot contain password!')
            }
        }
    }

})

const me = new User({
    name:'saurabh',
    age:22,
    email:'saurabh@gmail.com',
    password:'saurabh'
})

me.save().then(()=>{
    console.log(me);
}).catch((err)=>{
    console.log(err);
})