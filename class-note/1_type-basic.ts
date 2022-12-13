// JS 문자열 선언
// var str = 'hello';

// TS 문자열 
let str: string = 'hello';  // 변수 str은 문자열

// TS 숫자 
let num: number = 10;       //  변수 num은 숫자

// TS 배열
let arr: Array<number> = [1,2,3]; // 변수 arr은 숫자만 담긴 배열
let items : number[] = [1,2,3];   // 변수 items는 숫자만 담긴 배열 
let heroes : Array<string> = ['Cept', 'Thor', 'Hulk']; // 변수 heroes는 string만 담긴 배열

// TS 튜플 : 배열의 특정 인덱스에 특정 타입을 선언 
let address: [string, number] = ['gangnam', 10];

// TS 객체 : 
let obj: object = {}; //obj 변수는 객체

// let person: object = {
//       name : 'capt',
//       age : 100
// };

let person : {name: string, age:number} = {
    name : 'thor',
    age : 1000
}

// TS 진위값 
let show:boolean = true; // show라는 변수의 타입은 진위값 boolean이다 


// TS any : 모든 타입이 들어갈 수 있음
let todoItems : any = 'stssss'; 

