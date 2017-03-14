// 相对与非相对模块导入
// 相对导入是以 / , ./ , ../开头的，如
import Entry from "./components/Entry";
import { DefaultHeaders } from "../constants/http";
import "/mod";
// 所有其他形式都是非相对的
import * as $ from "jQuery";
import { Component } from "angular2/core";

/* 两种模块解析策略 */
/* Classic */
// 在 /root/src/folder/A.ts 文件里使用 import {b} from "./moduleB"的查找流程
// 1. /root/src/folder/moduleB.ts
// 2. /root/src/folder/moduleB.d.ts
// 如果找不到，则是非相对模块的导入
// 1. /root/src/folder/moduleB.ts
// 2. /root/src/folder/moduleB.d.ts
// 2. /root/src/moduleB.d.ts
// 2. /root/src/moduleB.d.ts
// 2. /root/moduleB.d.ts
// 2. /root/moduleB.d.ts
// 2. /moduleB.d.ts
// 2. /moduleB.d.ts

/* Node */
// Node.js模块
// 在 /root/src/moduleA.js 文件里导入一个 var x = require("./moduleB");
// Node.js的解析步骤是
// 1. 将/root/src/moduleB.js视为文件，检查是否存在
// 2. 将/root/src/moduleB视为目录，检查是否包含package.json文件并且指定了一个"main"模块。如果在 /root/src/moduleB/package.json 中包含了 {"main": "lib/mainModule.js"}，那么Node.js会引用 /root/src/moduleB/lib/mainModule.js
// 3. 将/root/src/moduleB视为目录，检查它是否包含index.js文件。这个文件会被隐式地当做那个文件夹下的main模块
// Node.js中非相对路径导入
// 在 /root/src/moduleA.js 文件里导入 var x = require("moduleB");
// 1. /root/src/node_modules/moduleB.js
// 2. /root/src/node_modules/moduleB/package.json
// 3. /root/src/node_modules/moduleB/index.js
// 4. /root/node_modules/moduleB.js
// 5. /root/node_modules/moduleB/package.json
// 6. /root/node_modules/moduleB/index.js
// 7. /node_modules/moduleB.js
// 8. /node_modules/moduleB/package.json
// 9. /node_modules/moduleB/index.js


// TypeScript模块
// 在 /root/src/moduleA.js 文件里导入一个 import { b } from "./moduleB"
// 1. /root/src/moduleB.ts
// 2. /root/src/moduleB.tsx
// 3. /root/src/moduleB.d.ts
// 4. /root/src/moduleB/package.json (如果指定了"typings"属性)
// 5. /root/src/moduleB/index.ts
// 6. /root/src/moduleB/index.tsx
// 7. /root/src/moduleB/index.d.ts
// 在 /root/src/moduleA.js 文件里导入 import { b } from "moduleB"
// 1. /root/src/node_modules/moduleB.ts
// 2. /root/src/node_modules/moduleB.tsx
// 3. /root/src/node_modules/moduleB.d.ts
// 4. /root/src/node_modules/moduleB/package.json (如果指定了"typings"属性)
// 5. /root/src/node_modules/moduleB/index.ts
// 6. /root/src/node_modules/moduleB/index.tsx
// 7. /root/src/node_modules/moduleB/index.d.ts
//
// 8. /root/node_modules/moduleB.ts
// 9. /root/node_modules/moduleB.tsx
// 10./root/node_modules/moduleB.d.ts
// 11./root/node_modules/moduleB/package.json (如果指定了"typings"属性)
// 12./root/node_modules/moduleB/index.ts
// 13./root/node_modules/moduleB/index.tsx
// 14./root/node_modules/moduleB/index.d.ts
//
// 15./node_modules/moduleB.ts
// 16./node_modules/moduleB.tsx
// 17./node_modules/moduleB.d.ts
// 18./node_modules/moduleB/package.json (如果指定了"typings"属性)
// 19./node_modules/moduleB/index.ts
// 20./node_modules/moduleB/index.tsx
// 21./node_modules/moduleB/index.d.ts

/* 附加的模块解析标记 */
// baseUrl
// 1. 命令行中的baseUrl
// 2. 'tsconfig.json'里的baseUrl

// 路径映射
// {
//   "compilerOptions": {
//     "baseUrl": ".", // This must be specified if "paths" is.
//     "paths": {
//       "jquery": ["node_modules/jquery/dist/jquery"]
//     }
//   }
// }

// 通过"paths"我们还可以指定复杂的映射，包括指定多个回退位置。 假设在一个工程配置里，有一些模块位于一处，而其它的则在另个的位置。 构建过程会将它们集中至一处。
// {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "*": [
//         "*",
//         "generated/*"
//       ]
//     }
//   }
// }

// 利用rootDirs指定虚拟目录
// {
//   "compilerOptions": {
//     "rootDirs": [
//       "src/views",
//       "generated/templates/views"
//     ]
//   }
// }

// 跟踪模块解析
// tsc --traceResolution

// 使用--noResolve
// 正常来讲编译器会在开始编译之前解析模块导入。 每当它成功地解析了对一个文件 import，这个文件被会加到一个文件列表里，以供编译器稍后处理。

// --noResolve编译选项告诉编译器不要添加任何不是在命令行上传入的文件到编译列表。 编译器仍然会尝试解析模块，但是只要没有指定这个文件，那么它就不会被包含在内。

// tsc app.ts moduleA.ts --noResolve
// 任何在app.ts中引用了除了moduleA之外的都会报错
