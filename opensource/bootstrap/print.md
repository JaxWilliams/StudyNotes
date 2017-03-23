1. 媒体查询
`@media print`

2. 移除阴影和背景颜色，颜色改黑色
```css
*,
*:before,
*:after {
  background: transparent !important;
  color: #000 !important; // Black prints faster: h5bp.com/s
  box-shadow: none !important;
  text-shadow: none !important;
}
```

3. 链接
```css
/* 访问过的链接加下划线 */
a,
a:visited {
  text-decoration: underline;
}

/* 链接后面用括号附上链接地址 */
a[href]:after {
  content: " (" attr(href) ")";
}

/* 地址后面附上地址的标题 */
abbr[title]:after {
  content: " (" attr(title) ")";
}

/* 空链接不显示地址 */
a[href^="#"]:after,
a[href^="javascript:"]:after {
  content: "";
}
```

3. 表格
```css
/* 引用和保留格式段落加边框 */
blockquote,
pre {
  border: 1px solid #999;
  page-break-inside: avoid;
}

/* h5bp.com/t */
thead {
  display: table-header-group;
}

/* 图片，行避免分页 */
img,
tr {
  page-break-inside: avoid;
  /* 设置在表格元素内部避免进行分页 */
}
```

4. 其他元素
```css
/* 图片不溢出 */
img {
  max-width: 100% !important;
}

h2,
h3,
p {
  orphans: 3; /* 在容器中当前页里至少有几行 */
  widows: 3;
}

h2,
h3 {
  page-break-after: avoid;
}
```

5. Bootstrap
```css
/* 导航条不显示 */
.navbar {
  display: none;
}

/* 按钮顶部边框为黑色 */
.btn,
.dropup > .btn {
  > .caret {
    border-top-color: #000 !important;
  }
}

/* 按钮顶部边框为黑色 */
.label {
  border: 1px solid #000;
}

/* 表格边框线合并，单元格均为白色 */
.table {
  border-collapse: collapse !important;

  td,
  th {
    background-color: #fff !important;
  }
}

/* 有边框的表格表格边框还是多个 */
.table-bordered {
  td,
  th {
    border: 1px solid #ddd !important;
  }
}
```
