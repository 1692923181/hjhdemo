//做登录效验的一个中间件
const auth = ()=>{
    return(req,res,next)=>{
        if(!req.session.user){
            res.redirect("/users/login")
        }else{
            next()
        }
    }

}
module.exports = auth