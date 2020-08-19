const mongoose = require('../config/db')

const schema = new mongoose.Schema({
    title:String,
    content:String,

},
{
    //这个选项，可以让每一篇文章都自动携带创建的时间与更新的两个字段
    timestamps:true
})

const model = mongoose.model('post',schema)

module.exports = model