const express = require('express')
require('./db/mongoose')
// that i used for running the mongoose------
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app=express();

app.use(express.json())
app.use(taskRouter)
app.use(userRouter)



const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is start now...');
})