// 在TS中使用JSX
// 1. 给文件一个.tsx扩展名
// 2. 启用jsx选项
// TypeScript具有两种JSX模式：preserve和react。
// 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。
// 在 preserve模式下生成代码中会保留JSX以供后续的转换操作使用（比如：Babel）。
// 另外，输出文件会带有 .jsx扩展名。 react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js。

/* as操作符 */
// var foo = <foo>bar; 类型断言
// var foo = bar as foo; tsx中这么使用

/* 类型检查 */
// TypeScript使用与React相同的规范 来区别它们。 固有元素总是以一个小写字母开头，基于值的元素总是以一个大写字母开头。
// 固有元素
// 固有元素使用特殊的接口JSX.IntrinsicElements来查找。
declare namespace JSX {
    interface IntrinsicElements {
        foo: any
    }
}
<foo />; // 正确
<bar />; // 错误

// 基于值的元素
// 基于值的元素会简单的在它所在的作用域里按标识符查找。
import MyComponent from "./myComponent";
<MyComponent />; // 正确
<SomeOtherComponent />; // 错误


// 元素类的类型和元素实例的类型。
class MyComponent {
  render() {}
}

// 使用构造签名
var myComponent = new MyComponent();

// 元素类的类型 => MyComponent
// 元素实例的类型 => { render: () => void }

function MyFactoryFunction() {
  return {
    render: () => {
    }
  }
}

// 使用调用签名
var myComponent = MyFactoryFunction();

// 元素类的类型 => FactoryFunction
// 元素实例的类型 => { render: () => void }

/////////////////////////////
declare namespace JSX {
  interface ElementClass {
    render: any;
  }
}

class MyComponent {
  render() {}
}
function MyFactoryFunction() {
  return { render: () => {} }
}

<MyComponent />; // 正确
<MyFactoryFunction />; // 正确

class NotAValidComponent {}
function NotAValidFactoryFunction() {
  return {};
}

<NotAValidComponent />; // 错误
<NotAValidFactoryFunction />; // 错误

/* 属性类型检查 */
// 对于固有元素，这是JSX.IntrinsicElements属性的类型。
declare namespace JSX {
  interface IntrinsicElements {
    foo: { bar?: boolean }
  }
}

// `foo`的元素属性类型为`{bar?: boolean}`
<foo bar />;

// 对于基于值的元素， 它取决于先前确定的在元素实例类型上的某个属性的类型。
declare namespace JSX {
  interface ElementAttributesProperty {
    props; // 指定用来使用的属性名
  }
}

class MyComponent {
  // 在元素实例类型上指定属性
  props: {
    foo?: string;
  }
}

// `MyComponent`的元素属性类型为`{foo?: string}`
<MyComponent foo="bar" />

/* 嵌入的表达式 */
// JSX允许你使用{ }标签来内嵌表达式。

var a = <div>
  {['foo', 'bar'].map(i => <span>{i / 2}</span>)}
</div>
// 上面的代码产生一个错误，因为你不能用数字来除以一个字符串。 输出如下，若你使用了 preserve选项：

var a = <div>
  {['foo', 'bar'].map(function (i) { return <span>{i / 2}</span>; })}
</div>

/* React整合 */
interface Props {
  foo: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>
  }
}

<MyComponent foo="bar" />; // 正确
<MyComponent foo={0} />; // 错误
