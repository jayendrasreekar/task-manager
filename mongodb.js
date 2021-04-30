
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// const id = new ObjectID()
// console.log(id.id)
// console.log(id.toHexString().length)

// console.log(id.getTimestamp())

//urlParser 
MongoClient.connect(connectionURL, {useNewUrlParser : true , useUnifiedTopology: true} , (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }
    console.log('Connected Correctly!')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     //_id: id,
    //     name: 'Vikram',
    //     age: 31
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     //ops: Array of documents
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // },{
    //     name : 'gunther',
    //     age: 27
    // }
    // ], (error,result) => {
    //      if(error){
    //          return console.log('Unable to insert documents')
    //      }
    //      console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Eat food',
    //     completed: true
    // },{
    //     description : 'purchase dress',
    //     completed: false
    // },{
    //     description : 'sleep well',
    //     completed: false
    // }
    // ], (error,result) => {
    //      if(error){
    //          return console.log('Unable to insert tasks')
    //      }
    //      console.log(result.ops)
    // })
    
    // db.collection('users').findOne ({_id:new ObjectID("600d56a9693ff984fa2c1d76")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // }) 
    
    // db.collection('users').findOne ({age:27}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 27}).toArray((error,users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 27}).count((error,count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("600d5aa36fac4f8afd240d1e")},(error,result) => {
    //     // if(error){
    //     //     return console.log('error')
    //     // }
    //     console.log(result)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
    //     console.log('tasks',tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("600e4af5b218af94e528d524")
    // },{
    //     $set: {
    //         name: 'Sreekar'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("600d56a9693ff984fa2c1d76")
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 28
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').deleteOne({
        description: 'Eat food'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})

//mongo db update operators -- $currentDate, $unset, $rename, $inc, 