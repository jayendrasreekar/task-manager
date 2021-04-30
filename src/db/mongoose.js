const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



// const me = new User({
//     name: ' Sreekar ',
//     email: 'sree@gmail.com ',
//     password: 'Phone098!'
// })
//
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })
//
// const task = new Task({
//     description: '    up Early' , completed: false
// })

// task.save().then(()=> {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!',error)
// })