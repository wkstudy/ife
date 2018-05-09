##步骤##
* 初始化
```
npm init -y
```
* 安装webpack、webpack-cli、webpack-dev-server
```
npm i webapck --save-dev
npm i webpack-cli  --save-dev
npm i webpack-dev-server --save-dev
```
* 安装san、san-loader、san-router
```
npm i san --save-dev
npm i san-loader  --save-dev
npm i san-router  --save-dev
* 安装常用loader:css-loader、style-loader、html-loader、babel-loader、babel-core、babel-runtime、babel-preset-latest、babel-plugin-transform-runtime
```
npm i css-loader --save-dev
npm i style-loader --save-dev
npm i html-loader --save-dev
npm i babel-loader babel-core babel-preset-latest babel-runtime babel-plugin-transform-runtime --save-dev
```
* 安装插件 html-webpack-plugin
```
npm i html-webpack-plugin --save-dev
```
* 建立项目目录
>2.1
>>dist
>>node_modules
>>src
>>>components (存放自己编写的san组件)
>>>index.js
>>>index.html
>>>style.css
>>.babelrc
>>package-lock.json
>>package.json
>>webpack.config.js
>>README.md
* 配置 .babelrc
```
{
	"presets":["latest"],
	 "plugins": ['transform-runtime']
}
```
* 配置package.json的script
```
"start": "webpack-dev-server --mode development --open",
"build": "webpack  --mode production --progress  --display-modules  --colors --display-reason --watch",
"dev": "webpack --mode development --progress  --display-modules  --colors --display-reason --watch"
```
* 编写相应的html,css,js,san组件，如文件所示
* 配置webpack.config.js,如文件所示





* 注意
每个san文件中需要有一个root element，即存在一个最高级别的tag来包含所有其他的tag
