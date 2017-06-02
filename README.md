## 关于本项目 
[In English](https://github.com/alex2wong/ngx-proj/blob/master/README_eng.md)

基于Angular-cli搭建，包含了一些自定义的组件和服务
本项目用[angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.构建

## 自定义组件
- 大容量下拉菜单组件 (large list/select): 提供分页以提高浏览器渲染性能. <br>
Chrome，Firefox采用不同策略渲染内置的Select 下拉菜单, 面对大量数据 <br>
Chrome在加载页面时卡顿，火狐在用户点击下拉时渲染卡顿。这个自定义组件 <br>
可兼容这两种浏览器的表现差异，提供流畅的下拉菜单功能，带搜索功能

  [DEMO](https://alex2wong.github.io/ngx-proj/dist/) <br>

- 获取必应每日一图组件 (getbing) <br>
编写这一服务，可注入到需要用到必应每日一图的组件中 <br><br>

- 压缩传图组件 (compress and upload)
