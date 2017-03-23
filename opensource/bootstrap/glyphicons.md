1. 定义字体
```css
@fontface {
  font-family: 'Glyphicons Halflings';
  src: url('@{icon-font-path}@{icon-font-name}.eot');
  src: url('@{icon-font-path}@{icon-font-name}.eot?#iefix') format('embedded-opentype'),
       url('@{icon-font-path}@{icon-font-name}.woff2') format('woff2'),
       url('@{icon-font-path}@{icon-font-name}.woff') format('woff'),
       url('@{icon-font-path}@{icon-font-name}.ttf') format('truetype'),
       url('@{icon-font-path}@{icon-font-name}.svg#@{icon-font-svg-id}') format('svg');
}
/* format */
```

2. 基础样式
```css
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

3. 图标样式
```css
.glyphicon-asterisk {
  &:before { content: "\002a"; }
}
```
