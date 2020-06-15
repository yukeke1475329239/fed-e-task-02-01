// 实现这个项目的构建任务
const path = require('path')
const { src , dest, parallel, series , watch} = require("gulp")
// const sass = require("gulp-sass")//样式的编译
// const babel = require("gulp-babel")//js的转换
// const swig = require("gulp-swig")//模板的转换
// const imagemin = require("gulp-imagemin")//图片和字体的压缩
const loadPlugins = require("gulp-load-plugins")
const plugins = loadPlugins()
const browserSync = require('browser-sync')
const bs = browserSync.create()
const standard = require('standard')
const Comb = require('csscomb')

const del = require("del")//清空指定的文件
// const useref = require("gulp-useref")
// const argv = minimist(process.argv.slice(2))


const clean = () =>{
  return del(['dist','temp'])
}
const style = () =>{
  return src('src/assets/styles/*.scss',{ base: 'src' })
         .pipe(plugins.sass({'outputStyle':"expanded"}))
         .pipe(dest('temp'))
}
const script = () =>{
  return src('src/assets/scripts/*.js',{ base: 'src' })
          //preset-env会把全部的ECMAScript的新特性进行转换
         .pipe(plugins.babel({presets:['@babel/preset-env']}))
         .pipe(dest('temp'))
}
const page = () =>{
  return src('src/*.html',{ base: 'src' })
         .pipe(plugins.swig())//模板的编译
         .pipe(dest('temp'))
}
const image = () =>{
  return src('src/assets/images/**',{ base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}
const font = () =>{
  return src('src/assets/fonts/**',{ base: 'src' })
    .pipe(plugins.imagemin())//模板的编译
    .pipe(dest('dist'))
}
const extra = () =>{
  return src("./public/**",{ base: 'public'})
         .pipe(dest('dist'))
}
const serve = () =>{
  watch('src/assets/styles/*.scss',style)
  watch('src/assets/scripts/*.js',script)
  watch('src/*.html',page)

  bs.init({
    notify:false,
    port:2020,
    files:"temp/**",
    server:{
      baseDir:['temp','src','public'],
      routes:{
        './node_modules':'node_modules'
      }
    }
  })
}
const useref = ()=>{
   return src('temp/*.html',{base:'temp'})
          .pipe(plugins.useref({searchPath:['temp','.']}))
          .pipe(plugins.if(/\.js$/,plugins.uglify()))
          .pipe(plugins.if(/\.css$/,plugins.cleanCss()))
          .pipe(plugins.if(/\.html$/,plugins.htmlmin({
            collapseWhitespace:true,
            minifyCss:true,
            minifyJs:true
          })))
          .pipe(dest('dist'))
}

const lint = done => {
  const comb = new Comb(require('./csscomb.json'))
  comb.processPath('src')
  const cwd = path.join(__dirname, 'src')
  standard.lintFiles("assets/styles/**/*.scss", { cwd, fix: true }, done)
}
const compile = parallel(style,script,page) //并行
const build = series(clean, parallel(series(compile,useref),extra,image,font))
const start = series(build,serve)

const deploy = series(compile, serve)
 
module.exports = {
  clean,
  build,
  deploy,
  serve,
  compile,
  start,
  useref,
  lint
}