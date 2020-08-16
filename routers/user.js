const express =require('express')
const router =express.Router()

router.get('/create',(req,res)=>{
    // res.send('用户注册页面')
    res.render('register')
})

module.exports = router