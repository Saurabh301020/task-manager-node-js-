const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'
const dataBaseName='task-manager'

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('there is some problem to connect to database!');
    }
    const db=client.db(dataBaseName)
    db.collection('myDatabase').findOne({completed:true},(err,user)=>{
        if(err){
            return console.log('there is some error occured during the find');
        }
        console.log(user);
    })

    


    console.log('connected to database successfully!');
})