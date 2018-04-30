#步骤
## npm 安装
*（关于npm的知识推荐看这个https://my.oschina.net/dkvirus/blog/1138568）<br>
*由于新版的nodejs已经集成了npm，所以直接下载node.js(推荐下载最新的LTS版本)<br>
*执行 cmd， 输入npm -v查看npm是否安装成功
## parcel安装
*按照官网上的来吧http://www.css88.com/doc/parcel/getting_started.html
```
npm install -g parcel-bundler
```
##创建helloworld项目
*新建文件夹helloworld<br>
*在helloworld中创建package.json文件(npm init -y)<br>
*cmd 命令到helloworld中用npm本地安装san并保存到devDependencies（项目开发环境中）,本地安装还是全局安装、项目开发环境与生产环境的区别上面的网址都有介绍(npm install san --save-dev),代码执行完成后出现node_modules文件夹<br>
*helloworld文件下新建index.html,style.css,index.js,集合san文档
##设置test、dev、build命令
*在package.json的script中写：
```
 "test": "echo \"Error: no test specified\" && exit 1",
 "dev": "parcel index.html -p 8089",
 "build": "parcel build index.html"
 ```
 ##babel-loader进行js转换
*因为parcel支持js、css格式的解析，所以不用设置（看大神笔记得知）
```
npm install babel-preset-env --save-dev
```
##6 查看结果
*helloworld目录下执行npm run dev 
*运行：http://localhost:8089/
##打包
*helloworld目录下执行npm run build （dist文件夹里就是打包出来的）
#结果
有点问题，结果勉强出来，有错，待日后改正