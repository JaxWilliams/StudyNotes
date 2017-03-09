function identity<T>(arg: T): T {
    return arg;
}
//T帮助我们捕获用户传入的类型，之后我们就可以使用这个类型。

//两种使用方法
let output = identity<string>("myString");
let output = identity("myString");
//我们没必要使用<>来明确传入类型；编译器可以查看myString的值，然后把T设置为它的类型。这叫类型腿短。

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}//传入的是个数组，可以有length属性

function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <U>(arg: U) => identity;
let myIdentity: {<T>(arg: T): T} = identity; //你也可以使用带有签名的对象字面量来定义

//泛型接口
interface GenericIdentityFn {
    <T>(arg:T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn = identity;