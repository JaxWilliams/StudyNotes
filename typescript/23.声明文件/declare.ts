/* 声明示例 */
// 全局变量
declare var foo: number;

// 全局函数
declare function greet(greeting: string):void;

// 带属性的对象
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}

// 函数重载
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

// 类
declare class Greeter {
    constructor(greeting: string);

    greeting: string;
    showGreeting(): void;
}

// 可重用类型（接口）
interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
}
declare function greet(setting: GreetingSettings): void;

// 可重用类型（类型别名）
type GreetingLike = string | (() => string) | Greeting;
declare function greet(g: GreetingLike):void;

// 组织类型
declare namespace GreetingLib.Options {
    interface Log {
        verbose?: boolean;
    }
    interface Alert {
        modal: boolean;
        title?: string;
        color?: string;
    }
}

/* 规范 */

// 普通类型
// 不要使用Number, String, Boolean, Object。这些类型指的是非原始的装盒对象
// 如果要使用Object类型，考虑使用any代替

// 回调函数类型
// 应该给返回值被忽略的回调函数设置void类型的返回值类型：
function fn(x: () => void) {
    x();
}
// 不要在回调函数里使用可选参数
interface Fetcher { // Wrong
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}
interface Fetcher { // Write
    getObject(done: (data: any, elapsedTime: number) => void): void;
}
// 不要因为回调函数参数个数不同而写不同的重载：
// 应该只使用最大参数个数写一个重载：
// 原因：回调函数总是可以忽略某个参数的，因此没必要为参数少的情况写重载。


/* 函数重载 */
// 应该排序重载令精确的排在一般的之前：
/* OK */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)

// 不要为仅在末尾参数不同时写不同的重载： 应该尽可能使用可选参数：
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}

// 不要为仅在某个位置上的参数类型不同的情况下定义重载： 应该尽可能使用类型类型：
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}


/* 模板 */
// global-modifying-module.d.ts
// global-plugin.d.ts
// global.d.ts
// module-class.d.ts
// module-function.d.ts
// module-plugin.d.ts
// module.d.ts


/* 发布到NPM */
{
    "name": "awesome",
    "author": "Vandelay Industries",
    "version": "1.0.0",
    "main": "./lib/main.js",
    "types": "./lib/main.d.ts",
    "dependencies": [
        "browserify@latest",
        "@types/browserify@lastest",
        "typescript@next"
    ]
}

// 不要在声明文件里使用 /// <reference path="..." />

// 获取类型声明文件只需要使用npm
// 例如：获取lodash库的声明文件
// npm install --save @types/lodash
// 下载完后，就可以直接在TypeScript里使用lodash了。 不论是在模块里还是全局代码里使用。
import * as _ from "lodash";
_.padStart("Hello TypeScript!", 20, " ");
