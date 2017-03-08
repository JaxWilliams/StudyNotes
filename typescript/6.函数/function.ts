//为函数定义类型
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number):number { return x+y; };

let myAdd:(x:number,y:number)=>number = function(x:number,y:number):number {return x+y;};

let myAdd: (baseValue:number, increment:number) => number = function(x: number, y:number):number { return x + y; };

//编译器自动腿短类型
let myAdd: (baseValue:number, increment:number) => number = function(x,y) { return x+y; };

//可选参数
function buildName(firstName: string, lastName?: string) {
    if(lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//默认值(可选)
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

//剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

//this
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

//利用接口让类型重用能够变得清晰简单些
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): ()=>Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

//回调函数中的this
interface UIElement {
    addClickListener(onclick: (this:void,e:Event)=> void): void;
}

class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        this.info = e.message;
    };
}
let h = new Handler();
UIElement.addClickListener(h.onClickBad); //error!

class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}

//重载
function pickCard(x: {suit: string; card: number; }[]):number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if(typeof x =="object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }else if (typeof x == "number") {
        let pickedSuit = Math.floor(x /13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
