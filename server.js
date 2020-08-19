const express =require('express')
const cookieParser = require('cookie-parser')
const app = express()
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')

//模板引擎
app.set('views','views')
app.set('view engine','ejs')

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

app.listen(3000)