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
//-----------------------------------------
const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById("630b9636b41abc0fc17df0af")
    // await task.populate('owner')
    // console.log(task.owner)

    // const user = await User.findById('630b8671e2f4bbfb5b9ba36c')
    // await user.populate('tasks')
    // console.log(user.tasks)
}

// main()