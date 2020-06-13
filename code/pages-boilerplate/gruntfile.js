// 实现这个项目的构建任务
const loadGruntTasks = require("load-grunt-tasks")
const lint = require("sass")

module.exports = grunt =>{
  grunt.initConfig({
    clean:{
      temp:"temp/**"
    },
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
  // grunt.rej
  loadGruntTasks(grunt)
}