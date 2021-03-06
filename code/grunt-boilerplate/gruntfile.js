// 实现这个项目的构建任务
const loadGruntTasks = require('load-grunt-tasks')
const sass = require("sass")
module.exports = grunt =>{
  grunt.initConfig({
    clean:{
      temp:"dist/**"
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
    },
    browserSync: {
      bsFiles: {
          src : 'src/assets/styles/main.css'
      },
      options: {
          server: {
              baseDir: "./"
          }
      }
    },
    csslint:{
      main:{
        files:{
          src:'src/assets/styles/*.css'
        }
      }
    },
    ghDeploy:{
      options: {
          repository: 'https://github.com/dfsq/angular-google-tasks.git',
          deployPath: 'dist'
      }
    },
  })

  loadGruntTasks(grunt) 

  grunt.registerTask('build', ['sass', 'babel','watch'])
  grunt.registerTask('lint', ['csslint'])
  grunt.registerTask('deploy', ['ghDeploy'])
  grunt.registerTask('serve', ['browserSync'])
  grunt.registerTask('start', ['sass','babel','watch','browserSync'])

}
