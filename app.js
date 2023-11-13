//// #2.0-2.3 variable 선언
// const a = 5;
// const b = 2;
// const myName = "Gata";
// let myName = "Gata"

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "gatinha";

// console.log("My new name is " + myName);

// const a= 5;
// let isGataFat = true;
// isGataFat = false;
// console.log(isGataFat);

//// #2.4 Booleans

// const amIFat = true;
// console.log(amIFat);

// const amIFat = null;
// let something;
// console.log(something, amIFat);

//// #2.5 Arrays
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek);

// array에서 요소 찾기
// console.log(daysOfWeek[4]);

// array 안에 요소 추가하기
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy[2]);
// toBuy.push("kimbab");
// console.log(toBuy[3]);
// console.log(toBuy[1254]);
// toBuy = ["kimchi"];

//// #2.6 Objects
// variable
// const playerName = "gata";
// const playerPoints = "1212";
// const playerPretty = "true";
// const playerFat = "little bit";

// array
// const player = ["gata","1212","true", "little bit"];

// objects
// const player = {
//     name: "gata",
//     points: 1212,
//     pretty: true,
//     fat: true
// };
// console.log(player);
// console.log(player.points);
// console.log(player.pretty);
// console.log(player.fat);

// objects 내의 요소 찾기
// console.log(player.name);
// console.log(player["name"]);

// objects 업데이트 하기
// player.fat = false;
// console.log(player);

//에러나는 경우
// player = false;
// console.log(player);

// objects 내에 요소 추가하기
// player.lastName = "Oh";
// console.log(player);

// player.points = player.points + 1245;
// console.log(player);

// #2.7 Functions part One
// sayHello 안에 argument가 없음
// function sayHello() {
//     console.log("Hello my name is C");
// }
// sayHello("gata");
// sayHello("sarang");

// #2.8 Functions part Two
// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age + " years old");
// }
// sayHello("gata", 27);
// sayHello("sarang", 2);

// 결과: undefined undefined
// function plus(a,b) {
//     console.log(a,b);
// }
// plus();

// function plus(a,b) {
//     console.log(a + b);
// }
// plus(); //NaN (= Not a Number)

//간단한 계산기
// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b) {
//     console.log(a / b);
// }
// plus(8, 60);
// divide(98, 20);

//function이 object 안에 있을 때
// const player = {
//     name: "Gata",
//     sayHello: function (otherPersonsName) {
//         console.log("Hello " + otherPersonsName + " nice to meet you")
//     },
// };

// player.sayHello("Lucas");

//#2.10 Recap 2
// const calculator = {
//     plus: function (a, b) {
//         console.log(a + b);
//     },
//     minus: function (a, b) {
//         console.log(a - b);
//     },
//     times: function (a, b) {
//         console.log(a * b);
//     },
//     divide: function (a, b) {
//         console.log(a / b);
//     },
//     power: function (a, b) {
//         console.log(a ** b);
//     }
// };

// calculator.plus(7,2);
// calculator.minus(10,2);
// calculator.times(2,3);
// calculator.divide(9,3);
// calculator.power(3,3);

//#2.11 Returns
// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     times: function (a, b) {
//         return a * b;
//     },
//     divide: function (a, b) {
//         return a / b;
//     },
//     power: function (a, b) {
//         return a ** b;
//     }
// }

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 1);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

//#2.13 Conditionals
const age = prompt("How old are you?");

console.log(typeof "15", typeof parseInt("15"));
console.log(age, parseInt(age));