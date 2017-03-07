function f(input: boolean) {
    let a = 100;
    if(input) {
        let b = a + 1;
        return b;
    }
    return b; //Error: 'b' doesn't exist here
}

try {
    throw "oh no!";
} catch(e) {
    console.log("oh well.");
}
console.log(e); //Error: 'e' doesn't exist here

//拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。 虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于 时间死区。 它只是用来说明我们不能在 let语句之前访问它们，幸运的是TypeScript可以告诉我们这些信息。
a++; //illegal to use 'a' before it's declared
let a;

let x = 10;
let x = 20; //错误，不能在一个作用域里多次声明`x`

//应用块级作用域
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i=0; i<matrix.length;i++) {
        var currentRow = matrix[i];
        for(let i = 0; i< currentRow.length; i++) {
            sum +=currentRow[i];
        }
    }
    return sum;
}


//就算作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在。
function theCityThatAlwaysSleeps() {
    let getCity;
    if(true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }
    return getCity();
}

//当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域。 
for (let i = 0; i < 10; i++) {
    setTimeout(function() {console.log(i);}, 100 * i);
}

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
//Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
}
kitty.name = "Rory"; //OK

//解构数组
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

function f2([first, second]: [number,number]) {
    console.log(first);
    console.log(second);
}
f2(input);

let [first, ...rest] = [1,2,3,4];
console.log(first,rest);

//对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let { a, b } = o;

//默认值
function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a,b = 1001} = wholeObject;
}

//函数声明
type C = { a: string, b?: number}
function f3({a,b}: C):void {
    //...
}

//展开
let first = [1,2];
let second = [3,4];
let bothPlus = [0,...first,...second,5];

//对象展开还有其它一些意想不到的限制。 首先，它只包含自身的可枚举的属性。 首先，当你展开一个对象实例时，你会丢失其方法：
class C {
    p = 12;
    m() {
    }
}
let c = new C();
let clone = { ...c };
clone.p; //OK 
clone.m(); //error!