//at() returns an index element

const names = ["mariya" , "marriyum" , "neha","nisha" ,"nisa"];
console.log(names);

const names1 = ["mariya" , "marriyum" , "neha","nisha" ,"nisa"];
console.log(names1.at(0));
console.log(names1.at(-1));
console.log(names1.at(-3));
console.log(names1.at(7));

const str = "this is visual studio code"
console.log(str.at(5));
console.log(str.at(0));
console.log(str.at(-2));
console.log(str[str.length-1]);

function appendNumber(arr, n) {
    arr.push(n);
    return arr;
}
//appendNumber
console.log(appendNumber([1, 2, 3, 4, 5], 6).at(-1));
console.log(appendNumber);

//computerOptions,randomIndex
const computerOptions = ["rock","paper","scissors"];
const randomIndex = Math.random()*computerOptions.length;
console.log(computerOptions.at(randomIndex));


//CONCAT
const a1 = ["mariya"];
const a2 = ["wahaj"];
const a3 = a1.concat(a2);
console.log(a3);

//CONSTRUCTOR
const fruits = ["banana", "orange", "apple"];
console.log(fruits.constructor);
