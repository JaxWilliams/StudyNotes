1. 重置box-sizing
```css
* {
  .box-sizing(border-box);
}
*:before,
*:after {
  .box-sizing(border-box);
}
```

2. body样式重置
```css
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

body {
  font-family: @font-family-base;
  font-size: @font-size-base;
  line-height: @line-height-base;
  color: @text-color;
  background-color: @body-bg;
}
```

3. 部分字体重置
```css
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
```

4. 链接重置
```css
a {
  color: @link-color;
  text-decoration: none;

  &:hover,
  &:focus {
    color: @link-hover-color;
    text-decoration: @link-hover-decoration;
  }

  &:focus {
    .tab-focus();
  }
}
```

5. 图片垂直居中
```css
img {
  vertical-align: middle;
}
```

6. 响应式图片
```css
.img-responsive(@display: block) {
  display: @display;
  max-width: 100%; // Part 1: Set a maximum relative to the parent
  height: auto; // Part 2: Scale the height according to the width, otherwise you get stretching
}
.img-responsive {
  .img-responsive();
}
```

7. 圆角
```css
.img-rounded {
  border-radius: @border-radius-large;
}
```

8. 缩略图
```css
.img-thumbnail {
  padding: @thumbnail-padding;
  line-height: @line-height-base;
  background-color: @thumbnail-bg;
  border: 1px solid @thumbnail-border;
  border-radius: @thumbnail-border-radius;
  .transition(all .2s ease-in-out);

  // Keep them at most 100% wide
  .img-responsive(inline-block);
}

```

9. 圆形的图
```css
.img-circle {
  border-radius: 50%; // set radius in percents
}
```

10. 分割线
```css
hr {
  margin-top:    @line-height-computed;
  margin-bottom: @line-height-computed;
  border: 0;
  border-top: 1px solid @hr-border;
}
```

11. 屏幕阅读器只读
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```

12. 屏幕阅读器(可见)
```css
.sr-only-focusable {
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
  }
}
```

13. IOS中可点击按钮指针样式重置
```css
[role="button"] {
  cursor: pointer;
}
```
