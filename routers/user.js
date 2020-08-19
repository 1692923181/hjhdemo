const express =require('express')
const UserModel =require("../model/user")
const router =express.Router()
const bcryptjs = require('bcryptjs')

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
        let user =new UserModel({
            username:req.body.username,
            email:req.body.email,
            password:bcryptjs.hashSync(req.body.password),
        })
        await user.save()
        res.send("注册成功")
    }
})

//登录页面
router.get("/login", (req, res) => {
    res.render("login");
  });

//登录操作
router.post("/login", async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
  
    if (!email || !password) {
      res.send("参数有错误");
      return;
    }
//由于数据库的密码加密了，不要直接用两个数据去做查询
let user = await UserModel.findOne({ email: email });
  if (!user) {
    res.send("用户名或密码错误");
    return;
  }

  console.log(user);

  //密码效验 
  let isOk = bcryptjs.compareSync(password, user.password);
  if (!isOk) {
    res.send("用户名或密码错误");
    return;
  }
    res.redirect("/posts")
})
  

module.exports = router 