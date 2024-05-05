// 同步函数
function a(num){
    return num * 2
}
//console.log("@a",a(10));
// 异步函数
function b(num){
    setTimeout(()=>{
        return num * 2
    },1000)
}
//console.log("@b",b(10));
// 回调函数
function c(num,callback){
    setTimeout(()=>{
        callback(num*2)
    },1000)
}
// 回调地狱
c(10,(res)=>{
    c(res,(res2)=>{
        c(res2,(res3)=>{
            // console.log("@res3",res3);
        })
    })
})
// promise
function d(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    })
}
d(10)
    .then(res=>{
        return d(res)
    })
    .then(res=>{
        return d(res)
    })
    .then(res=>{
        // console.log("@res",res);
    })
// await
function e(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    })
}
async function f(){
    const res=await e(10)
    const res2=await e(res)
    const res3=await e(res2)
    // console.log("@res3",res3);
}
// f()
// promise没有返回值，直接断掉，没有报错
function g(num){
    return new Promise((resolve,reject)=>{
        if(1>2){
            resolve(num*2)
        }
        resolve()
    })
}
async function h(){
    const res=await g(10)
    console.log("@res",res);
    console.log("@111",111);
}
h()