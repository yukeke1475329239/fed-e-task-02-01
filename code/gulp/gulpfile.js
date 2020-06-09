const fs = require("fs")
const { Transform } = require('stream')
const cleanCss = require("gulp-clean-css")
const rename = require("gulp-rename")
const { src, dest } = require('gulp')
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
// exports.promise = done =>{
//   console.log('promise')
//   return Promise.resolve()
// }
// exports.promise_error = done =>{
//   console.log('promise')
//   return Promise.reject(new Error('task failed!'))
// }

// const timeout = time =>{
//   return new Promise(resolve=>{
//     setTimeout(resolve,time)
//   })
// }

// exports.async = async()=>{
//   await timeout(3000)
//   console.log("async~~~")
// }

// exports.stream = ()=>{
//   const readStream = fs.createReadStream("package.json")
//   const writeStream = fs.createWriteStream("temp.txt")
//   readStream.pipe(writeStream)
//   return readStream
// }
// exports.stream = done=>{
//   //文件读取流
//   const readStream = fs.createReadStream("package.json")
//    //文件写入流
//   const writeStream = fs.createWriteStream("temp2.txt")
//   //把读取出来的文件流导入写入文件流
//   readStream.pipe(writeStream)
//   readStream.on('end',()=>{
//     done()
//   })
// }

// exports.default = () =>{
//   const read = fs.createReadStream('style.css')
//   const write = fs.createWriteStream('style.min.css')
//   //文件转换流
//  const transform = new Transform({
//     transform:(chunk,encoding,callback) =>{
//       const input = chunk.toString()
//       const output = input.replace(/\s+/g,'').replace(/\/\*.+?\*\//g,'')
//       callback(null,output)
//     }

//   })
//   read
//   .pipe(transform)
//   .pipe(write)
//   return read
// }

exports.default = () =>{
  return src('*.css')
         .pipe(cleanCss())
         .pipe(rename({extname:'.main.css'}))
         .pipe(dest("dist"))
}



