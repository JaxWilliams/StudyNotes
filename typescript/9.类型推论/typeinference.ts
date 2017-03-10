let roo = [new Rhino(), new Elephant(), new Snake()];
// 当候选类型不能使用的时候我们需要明确的指出类型
let roo: Animal() = [new Rhino(), new Elephant(), new Snake()];

//上下文类型推断
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.buton);  //<- Error
};
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.buton);  //<- Now, no error is given
};

// 上下文归类会在很多情况下使用到。 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。