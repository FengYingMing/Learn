/*
  commonJS出现的比较早，能够形成模块作用域大概率是借助函数
  猜测：
  当前模块是不是被包装在一个函数的内部？
  验证：
  只有函数内部有arguments对象
*/
console.log(arguments)
console.log(arguments.callee.toString()) //arguments.callee指向当前函数

/*
  函数内部有5个形参，分别是
  exports:指向module.exports，用于对外暴露内容
  require:在当前函数中用于引入外部模块
  module:代表当前模块
  __filename:当前模块对应的绝对路径
  __dirname:当前模块所在文件夹的绝对路径
*/

/*
  面试题：
  exports和module.exports的区别？
  相同点:
     都能够对外暴露模块中的成员
     export.a = xxx
     module.export.a = xxx 

  不同点
     module.export= {
       a:xxx
     }  可行

     export = {
       a:xxx
     }  不可行
  原因：内部export指向module.export,若改变export指向则无法实现导出
*/
