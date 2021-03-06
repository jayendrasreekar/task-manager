
const express = require('express');
const router = new express.Router();
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer = require('multer')

const upload = multer({
    dest: 'avatars'
})


router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user: user, token})
    }catch(e){
        res.status(400).send()
    }
})

router.post('/users', async (req,res)=> {
    const user = new User(req.body)
    try{
      await user.save()
      const token = await user.generateAuthToken()
      res.status(201).send({user: user ,token})
    }catch(e){
      res.status(400).send(e)
    }
 //    user.save().then(() => {
 //         res.status(201).send(user)
 //    }).catch((e)=>{
 //         res.status(400).send(e)
 //    })
 })

 router.post('/users/logout',auth, async (req,res)=> {
     try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
     }catch(e){
        res.status(500).send()
     }
 })

 
 router.post('/users/logoutAll',auth, async (req,res)=> {
    try{
       req.user.tokens = []
       await req.user.save()

       res.send()
    }catch(e){
       res.status(500).send()
    }
})



router.get('/users/me', auth ,async (req,res)=>{

   res.send(req.user)
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})

// router.get('/users/:id',async (req,res) => {
//     const userId = req.params.id

//     try{
//        const user = await User.findById(userId);
//        return res.send(user)
//     }catch(e){
//         return res.status(404).send()
//     }

//     // User.findById(userId).then((user)=>{
//     //     if(!user){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(user)
//     // }).catch((e)=>{
//     //     res.status(500).send();
//     // })
// })


 router.patch('/users/me', auth, async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']

    const isValidOperation = updates.every((update)=>{
       return allowedUpdates.includes(update)
    })


    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!..'})
    }

    try {
        
        updates.forEach((update) => req.user[update] = req.body[update])
        
        await req.user.save()

    //    const user = await User.findByIdAndUpdate(
    //        req.params.id,
    //        req.body,
    //        {new: true, runValidators: true}
    //    )

       
       res.send(req.user)
    }catch(e) {
       res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req,res) => {
    try {
        //const user = await User.findByIdAndDelete(req.user._id);
        await req.user.remove()
        res.send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/users/me/avatar', upload.single('avatar'), async (req,res) => {
    res.send()
})



module.exports = router