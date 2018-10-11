##mobx基础知识
# 面向对象
## 属性类型
### 数据属性 4个描述行为的特性
### configurable 
### enumerable 能否通过 for-in方位
### writable 能否修改属性值
### value  包含属性的数据值 
##
##
## 访问器类型
### 数据属性 4个描述行为的特性
### configurable 
### enumerable 能否通过 for-in方位
### get 能否修改属性值
### set  包含属性的数据值 

##mobx
## 状态引起的副作用应该被自动触发
## 单项数据流
### Action  state Reaction 


##响应式编程的概念
###  index.基础知识.js
###  mobx api 
###  mobx react 


## package.json
### webpack webpack-cli
### babel-core babel-preset-env babel-loader
### babel-plugin-transform-class-properties 类属性成员
### babel-plugin-transform-decorators-legacy decorator语法
#### ***  在.babelrc 中 plugins 中 transform-decorators-legacy 放到第一个位置 否则无法找到类属性成员
### mobx mobx-react react组件包装成可观察数据的反应 将 组件的render方法包装成 autorun 
### babel-preset-react

##webpack.config.js
### module.exports={
###     entry:’入口文件‘
###     output:{
###         path:路径
###         filename:'main.js'
###     }，
###     module:{ rules:[{test:/\.js$/, exclude:/node_modules/, loader:'babel-loader',           options:{presets:['env'], plugins:['transform-decorators-legacy',         'transform-class-properties']]},]}}

   

