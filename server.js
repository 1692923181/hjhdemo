const express =require('express')
const cookieParser = require('cookie-parser')
const app = express()
const session = require("express-session")
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const fileRouter = require('./routers/file')

//模板引擎
app.set('views','views')
app.set('view engine','ejs')


//session处理
app.use(session({
    secret:"Hello world",
    resave:true,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*2
    }
    
}))

//静态资源托管
app.use(express.static('public'))

//req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//req,cookies
app.use(cookieParser())

//路由
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use("/file",fileRouter)


app.get("/",(req,res)=>{
    res.redirect("/posts");
});

app.listen(3000)