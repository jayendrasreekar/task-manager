require('../src/db/mongoose')

const User = require('../src/models/User')

//600fadd42259b47bc09f4924

// User.findByIdAndUpdate('600faf394d71647e7bac5464', {age : 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id,age) => {
   const user = await User.findByIdAndUpdate(id,{age})
   const count = User.countDocuments({age})
   return count 
}

updateAgeAndCount('600faf394d71647e7bac5464',2).then((count) => {
    console.log(count)
}).catch((e)=>{
    console.log(e)
})