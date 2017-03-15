// 基础概念
// TypeScript中的声明会创建以下三种实体之一： 命名空间，类型或值

// 最常见的声明合并是接口合并
interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}
let box: Box = {height: 5, width: 6, scale: 10};
// 接口的非函数的成员必须是唯一的。 如果两个接口中同时声明了同名的非函数成员编译器则会报错。

// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 同时需要注意，当接口 A与后来的接口A合并时，后面的接口具有更高的优先级。
// 这个规则有一个例外是当出现特殊的函数签名时。 如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），那么它将会被提升到重载列表的最顶端。


/* 合并命名空间 */
// 对于命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里。
// 非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。

/* 命名空间与类和函数和枚举类型合并 */

/* 合并命名空间和类 */
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}
// 合并规则与上面合并命名空间小节里讲的规则一致，我们必须导出AlbumLabel类，好让合并的类能访问。
// 合并结果是一个类并带有一个内部类。 你也可以使用命名空间为类增加一些静态属性。

/* 合并命名空间和函数 */
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}
namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}

/* 合并命名空间和枚举类型 */
enum Color {
    red = 1,
    green = 2,
    blue = 4
}
namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}

// 目前，类不能与其它类或变量合并

/* 模块扩展 */
// map.ts
import { Observable } from "./observable";
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}
Observable.prototype.map = function (f) {
    // ... another exercise for the reader
}


// consumer.ts
import { Observable } from "./observable";
import "./map";
let o: Observable<number>;
o.map(x => x.toFixed());

