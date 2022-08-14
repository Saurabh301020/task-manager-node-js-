const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'
const dataBaseName='task-manager'

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('there is some problem to connect to database!');
    }
    // const db=client.db(dataBaseName)
    // db.collection('companyUsers').insertOne({
    //     name:'saurabh',
    //     age:'22',
    //     gender:'Male'
    // },(error,result)=>{
    //     if(error){
    //         return console.log('there is some problem to inserting the doc.');
    //     }
    //     // console.log(result.ops);
    // })

    // challenge------
    const db=client.db(dataBaseName)
    db.collection('myDatabase').insertMany([
        {
            description:'i need to finish the work',
            completed:false
        },
        {
            description:'i need to go park',
            completed:true
        },
        {
            description:'i need to go collage',
            completed:false
        }
    ],(err,result)=>{
        if(err){
            return console.log('there is something error during the insertion!');
        }
        
    })


    console.log('connected to database successfully!');
})