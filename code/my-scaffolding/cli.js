#!/usr/bin/env node
//node cli 必须要有这样的文件头

// chmod 755 cli.js 修改文件的读写权限
//通过命令行交互询问用户问题
//根据用户回答的结果生成相应的文件
const inquirer = require("inquirer")
const path = require("path")
const  fs  = require("fs")
const  ejs  = require("ejs")

// prompt 方法发起命令的询问
inquirer.prompt([
   {
     type:'input',
     name:"name",//用户回答问题的值
     message:"请输入",//用户输入的提示
   }
]).then(answers =>{
  //模板目录
  const template = path.join(__dirname,'templates')
  //目标目录
  const targetCatalog = process.cwd( )

  //将模板文件目录读取到目标目录
  fs.readdir(template,(err,files)=>{
    if(err) throw err
    files.forEach(file =>{
      //通过模板引擎渲染文件
      //第一个参数文件的绝对路径。第二个参数是模板引擎的上下文。第三个参数是成功的回调函数 
      ejs.renderFile(path.join(template,file),answers,(err,result) =>{
         if(err) throw err
         //通过文件写入的方式写入到目标目录
         fs.writeFileSync(path.join(targetCatalog,file),result)
      })
    })
  })
})






// yarn init 初始化package.json
// yarn link 将模块link到全局

