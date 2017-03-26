1. 表格，标题和行首
```less
table {
  background-color: @table-bg;
}
caption {
  padding-top: @table-cell-padding;
  padding-bottom: @table-cell-padding;
  color: @text-muted;
  text-align: left;
}
th {
  text-align: left;
}
```

2. 基础样式
```less
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: @line-height-computed;
  // 列
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        padding: @table-cell-padding;
        line-height: @line-height-base;
        vertical-align: top;
        border-top: 1px solid @table-border-color;
      }
    }
  }
  // 首行下面的边框线粗一些
  > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid @table-border-color;
  }
  // 移除第一行数据的上边框线
  > caption + thead,
  > colgroup + thead,
  > thead:first-child {
    > tr:first-child {
      > th,
      > td {
        border-top: 0;
      }
    }
  }
  // 多个tbody之间有粗的线作分割隔
  > tbody + tbody {
    border-top: 2px solid @table-border-color;
  }

  // 嵌套
  .table {
    background-color: @body-bg;
  }
}
```

3. 紧凑的表
```less
.table-condensed {
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        padding: @table-condensed-cell-padding;
      }
    }
  }
}
```

4. 带边框的表
```less
.table-bordered {
  border: 1px solid @table-border-color;
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        border: 1px solid @table-border-color;
      }
    }
  }
  > thead > tr {
    > th,
    > td {
      border-bottom-width: 2px;
    }
  }
}
```

5. 斑马线表
```less
table-striped {
  > tbody > tr:nth-of-type(odd) {
    background-color: @table-bg-accent;
  }
}
```

6. 悬浮高亮
```less
.table-hover {
  > tbody > tr:hover {
    background-color: @table-bg-hover;
  }
}
```

7. 表的颜色
```less
.table-row-variant(active; @table-bg-active);
.table-row-variant(success; @state-success-bg);
.table-row-variant(info; @state-info-bg);
.table-row-variant(warning; @state-warning-bg);
.table-row-variant(danger; @state-danger-bg);

.table-row-variant(@state; @background) {
  .table > thead > tr,
  .table > tbody > tr,
  .table > tfoot > tr {
    > td.@{state},
    > th.@{state},
    &.@{state} > td,
    &.@{state} > th {
      background-color: @background;
    }
  }

  // Hover states for `.table-hover`
  // Note: this is not available for cells or rows within `thead` or `tfoot`.
  .table-hover > tbody > tr {
    > td.@{state}:hover,
    > th.@{state}:hover,
    &.@{state}:hover > td,
    &:hover > .@{state},
    &.@{state}:hover > th {
      background-color: darken(@background, 5%);
    }
  }
}
```

8. 响应式表格
```less
.table-responsive {
  overflow-x: auto;
  min-height: 0.01%; // IE9 BUG兼容 (see https://github.com/twbs/bootstrap/issues/14837)

  @media screen and (max-width: @screen-xs-max) {
    width: 100%;
    margin-bottom: (@line-height-computed * 0.75);
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid @table-border-color;

    // 缩小空间
    > .table {
      margin-bottom: 0;

      // 内容不溢出
      > thead,
      > tbody,
      > tfoot {
        > tr {
          > th,
          > td {
            white-space: nowrap;
          }
        }
      }
    }

    // Special overrides for the bordered tables
    > .table-bordered {
      border: 0;

      // 左右无边框
      > thead,
      > tbody,
      > tfoot {
        > tr {
          > th:first-child,
          > td:first-child {
            border-left: 0;
          }
          > th:last-child,
          > td:last-child {
            border-right: 0;
          }
        }
      }

      // 最后一行无底部边框
      > tbody,
      > tfoot {
        > tr:last-child {
          > th,
          > td {
            border-bottom: 0;
          }
        }
      }

    }
  }
}

```
