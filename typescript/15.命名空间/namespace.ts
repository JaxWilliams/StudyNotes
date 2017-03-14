// 一个例子中有多个验证器，把所有的与验证器相关的类型都放到一个叫做Validation的命名空间下
namespace Validation {
    export interface StringValidator {}
    export class LettersOnlyValidator implements StringValidator {}
    export class ZipCodeValidator implements StringValidator {}
}

let validators: {[s: string]: Validation.StringValidator} = {};;
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// 可以是多个文件中的命名空间

/* 别名 */
// 另一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起个短的名字。
namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square();
