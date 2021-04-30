
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const multer = require('multer')

const port = process.env.PORT || 3000


// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     if(req.method === 'GET'){
//         res.send("Get requests are disabled")
//     }else{
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send("Under Maintainence Mode")
// })


//Automatically parse incoming Json for us
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Without Middle ware : new request -> run route handler

// With Middleware: new request -> do Something -> run route handler

app.listen(port,() => {
    console.log('Server is up on port'+ port)
})

// // const jwt = require('jsonwebtoken')

// // const myFunction = async () => {
// //     const token = jwt.sign({ _id: 'abc123' },'thisismynewcourse',{expiresIn: '1 days'})
// //     console.log("****",token)

// //     const data = jwt.verify(token,'thisismynewcourse')
// //     console.log("****",data)
// // }

// // myFunction()


// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function(){
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))

// const main = async () => {
//     // const task = await Task.findById('6039dec7d5ea203e515f3989')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6039dd1442b8f036adbcb7b6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file, cb){ 
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a Word Document'))            
        }

        cb(undefined, true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined,true)
        // cb(undefined,false)
    }
})

app.post('/upload',upload.single('upload'), (req, res) => {
    res.send()
})