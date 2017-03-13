// Symbol是唯一类型，通过Symbol构造函数创建
let sym1 = Symbol();
let sym2 = Symbol("key"); //可选的字符串key
// Symbol不可改变且唯一的
let sym3 = Symbol("key");
let sym4 = Symbol("key");
sym3 === sym4; // false
//symbols做为对象属性的键，私有属性或方法的一种实现
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol]() {
        return "C";
    }
}
let c = new C();
let className = c[getClassNameSymbol]();

let findSymbol = Symbol.for("key");

//系统内置的一些Symbol
Symbol.hasInstance
Symbol.isConcatSpreadable
// ...