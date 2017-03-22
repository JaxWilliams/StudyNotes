1. 设置默认字体样式,防止IOS和IE在屏幕旋转时字体调整
```css
html {
  font-family: sans-serif; // 1
  -ms-text-size-adjust: 100%; // 2
  -webkit-text-size-adjust: 100%; // 2
}
```

2. 移除默认外边距
```css
body {
  margin: 0;
}
```

3. 修正(定义)HTML5元素的display属性
```css
/* IE 兼容性 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
/* IE8/9 兼容性修复 */
audio,
canvas,
progress,
video {
  display: inline-block; // 1
  vertical-align: baseline; // 2
}
/* 隐藏无控制条的音频元素 */
audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}
```

4. a链接
```css
/* 移除IE10在a是active状态下的灰色背景 */
a {
  background-color: transparent;
}

a:active,
a:hover {
  outline: 0;
}
```

5. 不同类型的文本增强语义
```css
/* 地址加下划线 */
abbr[title] {
  border-bottom: 1px dotted;
}
/* 加粗 */
b,
strong {
  font-weight: bold;
}
/* 定义斜体 */
dfn {
  font-style: italic;
}
/* 大标题增大上下边距 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
/* 标记加黄色背景色 */
mark {
  background: #ff0;
  color: #000;
}
/* 小字 */
small {
  font-size: 80%;
}
/* 上下标(不影响行高) */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
```

6. 嵌入式内容
```css
/* 移除图片边框 */
img {
  border: 0;
}
/* svg溢出隐藏 */
svg:not(:root) {
  overflow: hidden;
}
```

7. 组
```css
figure {
  margin: 1em 40px;
}
/* Firefox呈现不同 */
hr {
  box-sizing: content-box;
  height: 0;
}
/* 溢出显示 */
pre {
  overflow: auto;
}
/* 代码相关 */
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
```

8. 表单
```css
/* 颜色继承 */
button,
input,
optgroup,
select,
textarea {
  color: inherit; // 1
  font: inherit; // 2
  margin: 0; // 3
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}
/*
1. Android4.0中audio和video可能会因此BUG被摧毁
2. 修正IOS中input点击无效果
3. 增加可用性和一致性在使用图片按钮时
*/
button,
html input[type="button"], // 1
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; // 2
  cursor: pointer; // 3
}

/* 重置为默认鼠标 */
button[disabled],
html input[disabled] {
  cursor: default;
}

/* 移除内边距和边距 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/* Firefox兼容性 */
input {
  line-height: normal;
}

/* IE8/9/10 盒子模型 */
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

/* chrome的问题,在input上设置字体影响到里面的加减按钮 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/* safari和chrome重置 */
input[type="search"] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
}

/* 在macOS中移除掉chrome与safari中cancel-button和内边距的样式 */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/* 定义成一直的边框和边距 */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/* 移除掉边距当缩放时就不会发现了 */
legend {
  border: 0;
  padding: 0;
}

/* 移除掉默认的滚动条(IE) */
textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}
```

9. 表格
```css
/* 移除单元格间的边距 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
```
