let isDone: boolean = true;

const str: string = 'hello';

let num: number = 2;

let arr: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [
    { item: 'value' },
    { item: 'value2' }
];

/**const foo = (obj: object): void => {
    console.log(obj);
};*/

const boo = (obj: Object): void => {
    console.log(obj);
}

boo('hi');

function foo2(a: number, b: number): number {
    return a + b;
}

const boo2 = (a: number, b: number): number => {
    return a + b;
}

let a: null = null;

//let v: null = undefined;

let b: undefined = undefined;

//let y: undefined = null;

let myName: any = '동현';
let myNameLength: number = (<string>myName).length;

let yourName: any = '이동현';
let yourNameLength: number = (yourName as string).length;