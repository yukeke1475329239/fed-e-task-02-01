// 实现这个项目的构建任务
const sass = require("sass")

const loadGruntTasks = require("load-grunt-tasks")
// const { loadNpmTasks } = require("grunt")

module.exports = grunt =>{
  grunt.initConfig({
    clean:{
      temp:"temp/**"
    },
    sass:{
      options:{
       sourceMap:true,
       implementation:sass
      },
      main:{
        files:{
          'dist/assets/styles/main.css':"./src/assets/styles/main.scss"
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
          'dist/assets/scripts/main.js':"./src/assets/scripts/main.js"
        }
      }
    },
    watch:{
      js:{
        files:['src/assets/scripts/*.js'],
        tasks:['babel']
      },
      css:{
        files:['src/assets/styles/*.scss'],
        tasks:['sass']
      }
    }
    serve: {
      options: {
          port: 9000,
          'client.js': {
              tasks: ['html2js', 'concat'],
              output: 'client.js'
          }
      }
    }
  })
  loadGruntTasks(grunt)

  grunt.registerTask('build',['sass','babel','watch'])
}

