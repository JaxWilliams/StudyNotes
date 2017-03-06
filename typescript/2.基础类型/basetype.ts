// Boolean
let isDone: boolean = false;

// Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// String
let str: string = 'bob';
str = 'smith';

let str2: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`;

// Array
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1 ,2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10];
x = [10, 'hello']; // Error
x[3] = 'world'; // (string | number)
x[6] = true; // Error,boolean is not (string | number)

// Enum
enum Color {Red, Green, Blue};
let c:Color = Color.Green;
enum Color {Red = 1, Green = 2, Blue = 4};

// Any
let notSure: any = 4;

let noSure: any = 4;
notSure.toFixed(); // okay
let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist n type 'Object'.

// Void
function warnUser(): void {
    alert('This is my warning message');
}
let unusable: void = undefined || null;

// Undefined null
let u: undefined = undefined;
let n: null = null;
let s: string = null; // okay

// Never
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}

function infiniteLoop(): never {
    while(true) {}
}

//类型断言
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

