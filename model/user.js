//users表的model文件
//1.引入moogoose
const mongoose= require("../config/db")
//2.定义好你要操作的表的数据结构schema
const schema = new mongoose.Schema({
    //表的数据结构描述
    username:String,
    email:String,
    password:String,

})
//3.生成model 
//         model的名字
const model = mongoose.model('user',schema)
//4.暴露model
module.exports = model