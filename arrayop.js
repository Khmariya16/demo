//map function
const nums = [2,3,4,5,6,7,8,9];

const newnums = [];
for(let i of nums){
    console.log(i ** 2);
    newnums.push(i ** 2);
}
console.log(newnums);

const result = nums.map((n) => { return n*2 } );
console.log(result);

const price = [45,35,25,65,22,23];

const res = price.map((p) => {return p + p*0.1});
console.log(res);

//discount
const p = [45,35,25,65,22,23];

const res1 = price.map((d) => {return d - d *.075});
console.log(res1);

//use map to get the price in integer
const price1 = ['$67.89' , '$348.99' , '$29384.22' , '$4.102' , '$1.241'];
console.log(parseInt('$67.89'.slice(1)));

//Convert names in upper case
const names = ["a" , "b" , "c" , "d", "e"];
console.log(names.map((p) => {return p.toUpperCase()}));


//to get names from array of full names
console.log('raju rastogi','kali charan','prem chopra')

