const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true
    // useCreateIndex:true
})

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error('Age must be +ve!')
            }
        }
    }
})

const me = new User({
    name:'saurabh',
    age:22
})

me.save().then(()=>{
    console.log(me);
}).catch((err)=>{
    console.log(err);
})