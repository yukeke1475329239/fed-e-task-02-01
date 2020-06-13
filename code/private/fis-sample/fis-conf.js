fis.match('*.{js,scss,png}',{
  release:'/assets/$0'
})

fis.match('**/*.scss',{
  rExt:'.css',//修改扩展名。 在使用这个文件的地方它会自动的定位到你编译过后结果的资源，这个就是资源定位核心能力的体现
  parser:fis.plugin('node-sass'),//自动转化sass结果
  optimizer:fis.plugin('clean-css')
})

fis.match('**/*.js',{
  parser:fis.plugin('babel-6.x'),
  optimizer:fis.plugin('uglify-js')
})