/* 导出 */
// 导出声明
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// 导出语句
export { ZipCodeValidator as mainValidator };

// 重新导出
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';
// AllValidators.ts
export * from "./StringValidator";
export * from "./LettersOnlyValidator";
export * from "./ZipCodeValidator";

/* 导入 */
import { ZipCodeValidator } from './ZipCodeValidator';
import { ZipCodeValidator as ZVC } from './ZipCodeValidator';
import * as validator from './ZipCodeValidator';
let myValidator = new validator.ZipCodeValidator();

// 一些模块会设置一些全局状态供其他模块使用
import "./my-module.js";

/* 默认导出 */
declare let $: jQuery;
export default $;

import $ from "jQuery";

export default class ZipCodeValidator {
    // ...
}

export default "123";

/* export = 和 import = require() */
export = ZipCodeValidator;
let zip = require('./ZipCodeValidator');

/* 动态加载 */
declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) { /* ... */ }
}

// 有很多奇怪的模块加载规则，ts可以兼容各个体系的模块加载方式，实际使用中大部分场景只使用一种加载模式，因此模块部分不需要学习太多的东西，但仍有以下注意点

// 如果仅导出单个class或function，使用export default
export default class SomeType {}
export default function getThing() {}

//如果要导出多个对象，把他们放在顶层导出
export class SomeType {}
export function someFunc() {}

// 明确地列出导入的名字
import { SomeType, SomeFunc } from "./MyThings";

// 使用命名空间导入模式当你要导出大量内容的时候
export class Dog {}
export class Cat {}
export class Tree {}
export class Flower {}
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();

// 使用重新导出进行扩展

// 模块里不要使用命名空间

/* 错误示例 */
// export namespace Foo {}
// 只有一个 export class 或 export funciton(使用export default)
// 多个文件顶层有相同的 export namespace Foo {}
