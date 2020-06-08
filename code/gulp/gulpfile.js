const fs = require("fs")

//gulp的基本使用
// exports.foo = done => {
//   console.log('foo')
//   done()
// }
// exports.default = done => {
//   console.log('default')
//   done()
// }
//gulp 的组合任务

// const {series,parallel} = require('gulp')

// const task1 = done =>{
//   setTimeout(() => {
//     console.log('1')
//     done()
//   }, 1000);
// }
// const task2 = done =>{
//   setTimeout(() => {
//     console.log('2')
//     done()
//   }, 1000);
// }
// const task3 = done =>{
//   setTimeout(() => {
//     console.log('3')
//     done()
//   }, 1000);
// }
// //串行  如进行环境部署，依赖某个文件的时候用串行
// exports.foo = series(task1,task2,task3)
// //并行 编译css和js两个文件互不影响的时候
// exports.bar = parallel(task1,task2,task3)
//gulp异步任务
// exports.callback = done =>{
//   console.log('callback~~')
//   done()
// }
// exports.callback_error = done =>{
//   console.log('callback~~')
//   done(new Error('task failed!'))
// }
exports.promise = done =>{
  console.log('promise')
  return Promise.resolve()
}
exports.promise_error = done =>{
  console.log('promise')
  return Promise.reject(new Error('task failed!'))
}

const timeout = time =>{
  return new Promise(resolve=>{
    setTimeout(resolve,time)
  })
}

exports.async = async()=>{
  await timeout(3000)
  console.log("async~~~")
}

// exports.stream = ()=>{
//   const readStream = fs.createReadStream("package.json")
//   const writeStream = fs.createWriteStream("temp.txt")
//   readStream.pipe(writeStream)
//   return readStream
// }
exports.stream = done=>{
  const readStream = fs.createReadStream("package.json")
  const writeStream = fs.createWriteStream("temp2.txt")
  readStream.pipe(writeStream)
  readStream.on('end',()=>{
    done()
  })
}

