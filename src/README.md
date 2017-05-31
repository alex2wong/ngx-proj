## 自适应布局
自适应布局是个老话题，但笔者平时接触不多，这次准备了解并且实践下。简单查阅了下资料，基本上主流的方式是基于
[媒体查询创建响应式网站](https://www.ibm.com/developerworks/cn/web/wa-cssqueries/)。这其中也会涉及到Flex 等具体的css属性，来辅助伸缩布局。但媒体查询是区别不同设备屏幕的基础，Flex并没有这个功能。
### 基于PureCSS
媒体查询其实比较简单，许多前端UI库已经内置了设定好的媒体查询，并且大多以这种形式出现：
```
<div class="pure-g">
    <div class="pure-u-1 pure-u-md-1-3"> ... </div>
    <div class="pure-u-1 pure-u-md-1-3"> ... </div>
    <div class="pure-u-1 pure-u-md-1-3"> ... </div>
</div>
```
对一组需要实现响应式布局的DOM元素，赋予几种屏幕下的样式类，pure-u-1 表示小屏幕下100%宽度，pure-u-md-1-3 表示中等分辨率下一行3等分宽度，各占33.33%. 
### 基于自定义Flex

## Material动画

### 把动画写入属性指令
