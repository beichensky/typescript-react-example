# typescript-react-todos 项目内容
此项目使用 create-react-app 搭建，使用 TypeScript + React + Redux 搭建了一个 TodoList Demo。
使用 create-react-app 创建 TypeScript 项目命令：
``` bash
$ create-react-app project-name --scripts-version=react-scripts-ts
```



## Demo 内容
  - 可以添加 Todo 事件，添加完成后会在列表中展示
  - 在列表中点击 Todo 事件，可以将事件标记为已完成状态
  - 点击不同的按钮 All、Active、Completed，会展示出完成状态不同的 Todo 事件




## 项目运行

### 准备工作
项目下载完成之后，打开项目，打开命令行，执行命令：
``` bash
$ cd typescript-react-todos

# 安装项目所需依赖
$ npm install
```


### 查看运行结果
命令行执行命令：
``` bash
$ npm run start

# 或执行 yarn run start
```

即可在浏览器查看运行效果。可以添加各种 Todo 事件，并且可以根据不同按钮进行切换显示不同状态的 Todo 事件。其中各种 TypeScript 结合 React 的用法皆可打开各个 tsx 文件进行查看。

更多关于脚手架自定义配置、打包的的用法请参考：[README-CRA.md](https://github.com/beichensky/typescript-react-example/blob/master/typescript-react-todos/README-CRA.md)

