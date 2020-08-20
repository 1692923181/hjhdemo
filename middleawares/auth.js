//做登录效验的一个中间件
const auth = ()=>{
    return(req,res,next)=>{
        if(!req.session.user){
            res.redirect(`/users/login?redirect=${req.originalUrl}`)
            //没有登录，跳转到登录页面
        }else{
            next()
        }
    }

}
module.exports = auth