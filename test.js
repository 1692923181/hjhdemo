//bcruptjs的使用
//1.引入
const bcryptjs = require("bcryptjs")
//2.调用它的方法bash()
let passworld = "123";
// bcryptjs.hash(passworld,10,(err,hash)=>{
//     if(err){
//         console.log("加密失败")
//     }else{
//         console.log("加密成功")
//         console.log(hash)
//     }
// })

//同步
let hash = bcryptjs.hashSync(passworld,10)
console.log(hash)

//3.使用bcryptjs compare在做效验
// bcryptjs.compare(passworld,"$2a$10$1cfwoxMOrwpFKlJ1DTpyP.Amxnr0iZu7k35PboeC64Oo9q78pxgWG",
// (err,success)=>{
//      if(err){
//          console.log("效验失败")
//      }else{
//          console.log(success)
//          if(success){
//              console.log('效验成功')
//          }else{
//              console.log('两次密码不一致')
//          }

//      }
// }
// )
let isOK = bcryptjs.compareSync(passworld,
'$2a$10$1cfwoxMOrwpFKlJ1DTpyP.Amxnr0iZu7k35PboeC64Oo9q78pxgWG',

    )
console.log(isOK)
//$2a$10$1cfwoxMOrwpFKlJ1DTpyP.Amxnr0iZu7k35PboeC64Oo9q78pxgWG
//$2a$10$HLV5aVuNsbfUyuUTdbgsjeARpoo/Xf8Xvb4aDONN9.2ejZliA0BMW

// // console.log(1)
// // setTimeout(()=>{
// //     console.log(2 )
// // });
// // console.log(3)

// //1.将异步代码给封装，封装成一个promise
// //2.使用一个async的方法，在这个方法里去调用上面的异步。加上await方法
// const sleep = (time =1000)=>{
//     return new Promise((resolve,reject)=>{
//         //这里就可以写异步代码
//         // resolve()      
//         setTimeout(() => {
//             console.log(2)
//             resolve("张三")
//         }, time);
        
//     })
// }
// // sleep().then(data =>{
// //     console.log(data);
// // })
// // sleep().then(()=>{
// //     console.log("异步执行完成")
// // }).catch(()=>{
// //     console.log("catch")
// // })
// const main = async()=>{
//     console.log(1);
//     let data = await sleep();
//     console.log(data)
//     console.log(2)
// }
// main()