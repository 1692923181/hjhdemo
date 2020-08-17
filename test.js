// console.log(1)
// setTimeout(()=>{
//     console.log(2 )
// });
// console.log(3)

//1.将异步代码给封装，封装成一个promise
//2.使用一个async的方法，在这个方法里去调用上面的异步。加上await方法
/**
 * 休眠
 * @param{Number} time 休眠时间
 * 
 * 
 */
const sleep = (time =1000)=>{
    return new Promise((resolve,reject)=>{
        //这里就可以写异步代码
        // resolve()      
        setTimeout(() => {
            console.log(2)
            resolve("张三")
        }, time);
        
    })
}
// sleep().then(data =>{
//     console.log(data);
// })
// sleep().then(()=>{
//     console.log("异步执行完成")
// }).catch(()=>{
//     console.log("catch")
// })
const main = async()=>{
    console.log(1);
    let data = await sleep();
    console.log(data)
    console.log(2)
}
main()