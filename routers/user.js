const express =require('express')
const UserModel =require("../model/user")
const router =express.Router()

//注册页面路由
router.get('/create',(req,res)=>{
    // res.send('用户注册页面')
    res.render('register')
})
 

//注册操作路由
router.post('/store',async(req,res)=>{
    //1.获取form表单，前端传递过来的参数
    // console.log (req.body)
    let username =req.body.username
    let password =req.body.password
    let email =req.body.email
  
    //2.对参数做一些效验
    if(!username||!password||!email){
        res.send("参数有错误")
        return
    }
    //3.存储到数据库中
    let data = await UserModel.findOne({email:req.body.email})
    // console.log(data)
    if(data){
        res.send("邮箱已经被注册了")
    }else{
        let user =new UserModel(req.body)
        user.save()
        res.send("注册成功")
    }
})
module.exports = router