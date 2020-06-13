
// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting(){
    //prompting方法用于以命令行交互的方式询问用户的一些问题
  // Yeoman 在询问用户环节会自动调用此方法
    //在此方法中可以调用父类的 prompt()方法发出对用户的命令询问
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: 'Your project name',
        default: this.appname, //appname为项目生成目录名称
      }
    ]).then(answers =>{ //prompting的返回值也就是用户输入的数据把这些数据挂载到this上面
      //answers = {name: 'user input value'}
      this.answers = answers
    })
  }
  writing () {
    const template = ["a.html",'测试.md']
    //....................................................................
    //模板文件路径
    template.forEach(item=>{
      this.fs.copyTpl(this.templatePath(item),this.destinationPath(item),this.answers)
    })
  }
}