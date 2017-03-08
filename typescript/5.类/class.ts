class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {super(name);}
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino"); //即使tom被声明为Animal类型，但是它的值为Horse，tom.move()会调用Horse里的重写方法

/* ************************************************************** */

//在TypeScript里，成员都默认为public
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public moveBy(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Animal {
    private name: string;
    constructor(theName: string) {this.name = theName;}
}
new Animal("Cat").name; // Error: 'name' is private;

class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino; // 如果所有成员的类型都是兼容的，我们就认为他们的类型是兼容的
animal = employee; // 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 

//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
class Person {
    protected name: string;
    protected constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); //构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
console.log(howard.getElevatorPictch());
console.log(howard.name); //Error

/* *********************************************************** */
// 可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; //error! name is readonly.

class Animal { //省略参数
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let passcode = "secret passcode";

class Employee {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
// 只带有get不带有set的存取器自动被判断为readonly。

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) {}
}


/* ***************************************************** */
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports');
    }
}
let department: Department; //ok to create a reference to an abstract type
department = new Department(); //error: cannot create an instance of an abstract class
department.printName();
department.generateReports(); //error: method doesn't exist on declared abstract type


/* ***************************************************** */
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x:1, y:2, z:3}

