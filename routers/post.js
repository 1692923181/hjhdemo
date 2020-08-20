const express =require('express')
const auth =require("../middleawares/auth")
const router = express.Router()
const PostModel = require('../model/post')
//文章列表
router.get('/',auth(),async(req,res)=>{
        if(!req.session.user){
            //没有登录
            res.send('没有登录')
            return;
        }
    //从url地址上获得当前的是第几页，每页要多少条
    let pageNum = parseInt(req.query.pageNum) || 1;
    let pageSize = parseInt(req.query.pageSize) ||5;
    // let total =5;//总共的页数
    let count = await PostModel.find().countDocuments();
    total = Math.ceil(count/pageSize)

    //从数据库中查找文章，你要的是那一段的数据
    let list = await PostModel.find()
    .sort({updatedAt:-1})
    .skip((pageNum - 1)*pageSize)
    .limit(pageSize);
    res.render('posts/index',{
        list:list,
        total:total,
        pageNum:pageNum,
        user:req.session.user
    });


})

//新增文章页面
router.get('/create',auth(),(req,res)=>{
    res.render('posts/create',{
        user:req.session.user
    });
})
//文章详情
router.get('/:id',auth(),async(req,res)=>{
    //1.获取文章的ID
    //params以json格式的形式返回一个集合
    let id = req.params.id;
    //2.根据这个id去数据库中查找那个文章
    let data = await PostModel.findById(id);
    //3.渲染页面
    res.render('posts/show',{
        postInfo:data,user:req.session.user
    })
})

//新增文章
router.post('/store',auth(),async(req,res)=>{
    //1.数据的效验
    if(!req.body.title||!req.body.content){
        res.send('参数有错误')
        return;
    }
    //2.直接存在数据库里去
    let newPost = new PostModel(req.body)
    await newPost.save()
    // res.send('新增成功')
    //新增成功直接跳转列表页
    res.redirect('/posts')
})
//编辑文章的页面
router.get('/:id/edit',auth(),async(req,res)=>{
    //1/根据文章id获取信息
    let id = req.params.id
    let  post = await PostModel.findById(id) 
    res.render('posts/edit',{
        id:post._id,
        title:post.title,
        content:post.content,
        user:req.session.user
    })
})

//编辑文章的操作
router.post('/update',auth(),async(req,res)=>{
    //1.需要修改的文章的ID
    let id =req.body.id;
    let title = req.body.title;
    let content = req.body.content;
    //2.直接做修改
   let data = await PostModel.updateOne(
    {_id:id},
    {title:title,content:content}
    );
    res.send("修改成功")

})

//删除的接口，供前端ajax调用
router.delete('/:id',async(req,res)=>{
    let id = req.params.id

    await PostModel.deleteOne({_id:id})

    res.send({
        code:0,
        msg:'删除成功'
    })
})

module.exports = router 