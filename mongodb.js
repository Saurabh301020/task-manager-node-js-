const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'
const dataBaseName='task-manager'

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('there is some problem to connect to database!');
    }
    const db=client.db(dataBaseName)
    // db.collection('myDatabase').deleteOne({name:'saurabh'})
    db.collection('myDatabase').deleteMany({name:'gaurav'})
    

    


    console.log('connected to database successfully!');
})