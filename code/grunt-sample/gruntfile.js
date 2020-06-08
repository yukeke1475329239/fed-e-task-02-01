//grunt入口文件
//用于定义一些需要grunt自动执行的任务
//需要导出一个函数
//函数接受一个 grunt 形参 内部提供一些创建任务时的用到API
const sass = require("sass")
const loadGruntTasks = require("load-grunt-tasks")
module.exports = grunt => {
  // grunt.registerTask('foo',()=>{//接受两个参数，第一个是任务的名称，第二个是执行任务时的函数
  //  console.log("foo~~~")
  //  retrun false
  // })
  // grunt.registerTask('bar','任务描述',()=>{//接受两个参数，第一个是任务的名称，第二个是执行任务时的函数
  //   console.log("bar~~~")
  // })
  // grunt.registerTask('async',function(){//接受两个参数，第一个是任务的名称，第二个是执行任务时的函数
  //   let done = this.async()
  //   setTimeout(()=>{
  //     console.log('setTimeout')
  //     done()
  //   },2000)
  // })
  // grunt.registerTask('default',()=>{//grunt 默认任务，不需要指定任务名称
  //   console.log("default")
  // })
  // grunt.registerTask('default',['async','foo','bar'])

  //grunt 标记任务失败
  // grunt.registerTask('foo-async',function(){
  //   let done = this.async()
  //   setTimeout(()=>{
  //     console.log('setTimeout')
  //     done(false)
  //   },2000)
  // })
  // //grunt的配置方法
  // grunt.initConfig({
  //   foo:{
  //     bar:123
  //   }
  // })
  // grunt.registerTask('too',()=>{
  //   let config = grunt.config('foo')
  //   console.log(config.bar)
  // })

  //Grunt 多目标任务

  // grunt.initConfig({
  //   build:{
  //     bar:123,
  //     css:'style'
  //   }
  // })
  // //多目标模式
  // grunt.registerMultiTask('build',function(){
  //  console.log(this.target,this.data)
  // })
  // yarn grunt build
  // yarn grunt build:css

   //Grunt 插件的使用
  //  grunt.initConfig({
  //   clean:{
  //     temp:"temp/*.txt"//需要清除的文件路径
  //   }
  //  })
  //  grunt.loadNpmTasks('grunt-contrib-clean')


    grunt.initConfig({
      sass:{
        options:{
          sourceMap:true,
          implementation:sass
        },
        main:{
         files:{
           'dist/css/main.css':'src/scss/main.scss'
         }
        }
      },
      babel:{
        options:{
          sourceMap:true,
          presets:['@babel/preset-env']
        },
        main:{
          files:{
            'dist/js/app.js': 'src/js/app.js'
          }
        }
      },
      watch:{
        js:{
          files:['src/js/*.js'],
          tasks:['babel']
        },
        css:{
          files:['src/scss/*.scss'],
          tasks:['sass']
        }
      }
     })
    //  grunt.loadNpmTasks('grunt-sass')
     loadGruntTasks(grunt)//自动加载所有的 grunt 插件中的任务
     grunt.registerTask('default',['sass','babel','watch'])
}