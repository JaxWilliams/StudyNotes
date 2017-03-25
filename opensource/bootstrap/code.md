```less
code,
kbd,
pre,
samp {
  font-family: @font-family-monospace;
}

code {
  padding: 2px 4px;
  font-size: 90%;
  color: @code-color;
  background-color: @code-bg;
  border-radius: @border-radius-base;
}

kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: @kbd-color;
  background-color: @kbd-bg;
  border-radius: @border-radius-small;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);

  kbd {
    padding: 0;
    font-size: 100%;
    font-weight: bold;
    box-shadow: none;
  }
}

// 保留格式，重点在于word-break,word-wrap，同时加个外框，其中的代码空白保留但换行
pre {
  display: block;
  padding: ((@line-height-computed - 1) / 2);
  margin: 0 0 (@line-height-computed / 2);
  font-size: (@font-size-base - 1); // 14px to 13px
  line-height: @line-height-base;
  word-break: break-all;
  word-wrap: break-word;
  color: @pre-color;
  background-color: @pre-bg;
  border: 1px solid @pre-border-color;
  border-radius: @border-radius-base;

  code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }
}

.pre-scrollable {
  max-height: @pre-scrollable-max-height;
  overflow-y: scroll;
}
```
