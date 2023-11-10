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
const player = {
    name: "gata",
    points: 1212,
    pretty: true,
    fat: true
};
// console.log(player);
// console.log(player.points);
// console.log(player.pretty);
// console.log(player.fat);

// objects 내의 요소 찾기
// console.log(player.name);
// console.log(player["name"]);

// objects 업데이트 하기
player.fat = false;
console.log(player);

//에러나는 경우
// player = false;
// console.log(player);

// objects 내에 요소 추가하기
// player.lastName = "Oh";
// console.log(player);

player.points = player.points + 1245;
console.log(player);

