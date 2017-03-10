interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

//对比的是结构，不是名义上的声明Person实现Named

// TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。
interface Named { name: string; }
let x: Named;
let y = { name: 'Alice', location: 'Seattle' };
x = y; //编译器检查x中的每个属性，看是否能在y中也找到对应属性。

//函数兼容性
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error
//你可能会疑惑为什么允许忽略参数,因为这在JS中很常见
let items = [1, 2, 3];
// Don't force these extra arguments
items.forEach((item, index, array) => console.log(item));
// Should be OK!
items.forEach((item) => console.log(item));

// 比较函数兼容性的时候，可选参数与必须参数是可交换的。 原类型上额外的可选参数并不会造成错误，目标类型的可选参数没有对应的参数也不是错误。


//对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。 这确保了目标函数可以在所有源函数可调用的地方调用。

//枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。但不同枚举类型之间不兼容
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status = Status.Ready;
status = Color.Green;  //error

//  比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK


//私有成员会影响兼容性判断。 当类的实例用来检查兼容时，如果它包含一个私有成员，那么目标类型必须包含来自同一个类的这个私有成员。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。

//泛型
interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // okay, y matches structure of x

//上面代码里，x和y是兼容的，因为它们的结构使用类型参数时并没有什么不同。 把这个例子改变一下，增加一个成员，就能看出是如何工作的了
//所以比较的还是结构

interface NotEmpty<T> {
    data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y;  // error, x and y are not compatible

// 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。 