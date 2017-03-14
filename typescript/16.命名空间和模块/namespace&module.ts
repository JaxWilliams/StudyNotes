// 命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象。这令命名空间十分容易使用。他们可以在多文件中同时使用，并通过 --outFile 结合在一起。
// 像命名空间一样，模块可以包含代码和声明。不同的是模块可以声明它的依赖。


// 错误用法
// 1.不必要的命名空间
export namespace Shapes {
    export class Triangle {}
    export class Square {}
}
import * as shapes from "./shapes";
let t = new shapes.Shapes.Triangle(); // shapes.Shapes?

// 改进后
// shapes.ts
export class Triangle { /* ... */ }
export class Square { /* ... */ }
// shapeConsumer.ts
import * as shapes from "./shapes";
let t = new shapes.Triangle();
