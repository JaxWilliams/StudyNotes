/* 交叉类型 */
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    // ...
    return result;
}

/* 联合类型 */
function padLeft(value: string, padding: string | number) {
    // ...
}
let indentedString = padLeft("Hello world", 1);
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}
let pet = getSmallPet();
pet.layEggs();
pet.swim(); //errors

/* 类型保护与区分类型 */
let pet = getSmallPet();

// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}

// 为了让这段代码工作，我们要使用类型断言：
let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

// 用户自定义的类型保护
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if(isFish(pet)) {
    pet.swim();
}else {
    pet.fly();
}

// typeof类型保护
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

// 我们可以直接在代码里检查类型, TypeScript可以将它识别为一个类型保护
function padLeft(value: string, padding: string | number) {
    if(typeof padding === "number") {
        // ...
    }
    // ...
}
// 这些 typeof类型保护 只有两种形式能被识别：typeof v === "typename"和typeof v !== "typename"，"typename"必须是"number"，"string"，"boolean"或"symbol"

// instanceof类型保护

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}

// instanceof的右侧要求是一个构造函数，TypeScript将细化为：
// 1. 此构造函数的prototype属性的类型，如果它的类型不为any的话
// 2. 构造签名所返回的类型的联合

/* 类型别名 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

// 类型别名也可以是泛型
type Container<T> = { value: T };

// 类型别名不能出现在声明右侧的任何地方。
type Yikes = Array<Yikes>; // errors

// 接口 vs. 类型别名
// 1. 接口创建了一个新的名字，可以在其他任何地方使用。
// 2. 类型别名并不创建新名字--比如，错误信息就不会使用别名
// 3. 另一个重要区别是类型别名不能被extends和implements

/* 字符串字面量类型 */
type Easing = "ease-in" | "ease-out" | "ease-in-out";
// 字符串字面量类型还可以用于区分函数重载：
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
function createElement(tagName: string): Element {
    // ...
}

/* 可辨识联合 */
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius * 2;
    }
}

// 当没有涵盖所有可辨识联合的变化时，我们希望编译器通知我们，有2中方式可以实现
// 1. 启用--strictNullChecks
// 2. 使用never类型

/* 多态的this类型 */
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue();