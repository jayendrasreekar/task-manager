require('../src/db/mongoose')

const Task = require('../src/models/Task')

//600fadd42259b47bc09f4924

// Task.findByIdAndRemove('600f8ed27d7e4a4970ff9afe').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const deleteTaskAndCount = async (id) => {
     const task = await Task.findByIdAndRemove(id)
     const count = await Task.countDocuments({completed:false})
     return count
}

deleteTaskAndCount('6012491760bd5c3a291ba9b1').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})