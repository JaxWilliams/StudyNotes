interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

//可索引类型
interface StringArray {
    [index: number]: string;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;         //可以，length是number类型
    name: string            //错误，`name`的类型不是索引类型的子类型
}

//类类型
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

//扩展接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;