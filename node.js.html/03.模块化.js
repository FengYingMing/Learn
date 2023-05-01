/*
  一个模块其实指的就是一个独立的js文件
  模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程
*/

/*
  node.js遵循了CommonJS模块化规范
  node中模块的分类：
  1.内置模块 - node自己提供，比如：fs,path,http
  2.自定义模块 - 用户创建的每个.js文件，都是自定义模块
  3.第三方模块 - 由第三方开发出来的模块，并非官网提供的内置模块，要先下载
  4.导入模块都是通过 require()
  5.导出模块 module.exports ={

  }
*/

/*
  node.js中的模块作用域
  在node.js中，用户创建的每个.js文件都是自定义模块。
  在定义模块中定义的变量，方法等成员，只能在当前模块被访问，这种模块级别的访问限制，就叫模块作用域
*/

/*
require()加载模块的机制
加载自定义模块和其他模块的机制有相同之处，也有不同之处，所以这里分开来看。

### 加载自定义模块

1. 首次加载成功，会缓存模块
2. 下次从缓存中加载，速度更快
3. 加载自定义模块必须加 `./` ，如果是其他路径，对应变化，否则会把它当做核心模块或者第三方模块
4. 加载自定义模块的时候，如果是 `require('./abc')`
   1. 优先加载相同名字的文件，加载一个叫做 abc 的文件
   2. 自动补 `.js` 后缀，然后加载 `abc.js` 文件
   3. 自动补 `.json` 后缀，然后加载 `abc.json` 文件
   4. 自动补 `.node` 后缀，然后加载 `abc.node` 文件
   5. 以上文件都没有，则报错 `Cannot find module './abc'`

### 加载核心模块和第三方模块

1. 首次加载成功，会缓存模块

2. 下次从缓存中加载，速度更快

3. 加载模块一定`不能`加 `./` ，否则会把它当做自定义模块

4. 加载模块的时候，如果是 `require('haha')`

   1. 优先加载核心模块

   2. 去查找并加载第三方模块，查找第三方模块的路径可以通过 `module.paths` 查看

      [

       'C:\\Users\\yjh\\Desktop\\99-框架前置课\\day2\\04-案例\\01-模块化\\03-自定义模块加载细节\\node_modules',
        'C:\\Users\\yjh\\Desktop\\99-框架前置课\\day2\\04-案例\\01-模块化\\node_modules',
        'C:\\Users\\yjh\\Desktop\\99-框架前置课\\day2\\04-案例\\node_modules',
        'C:\\Users\\yjh\\Desktop\\99-框架前置课\\day2\\node_modules',
        'C:\\Users\\yjh\\Desktop\\99-框架前置课\\node_modules',
        'C:\\Users\\yjh\\Desktop\\node_modules',
        'C:\\Users\\yjh\\node_modules',
        'C:\\Users\\node_modules',
        'C:\\node_modules'

      ]

   3. 加载第三方模块会从当前目录开始寻找node_modules文件夹， 如果找到进入node_modules文件夹寻找对应的模块。如果没找到，进入上一级目录继续寻找node_modules，一直到根目录。如果一直没有找到，提示未找到模块。

*/
