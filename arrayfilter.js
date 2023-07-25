const prices = [2300, 499, 233, 199, 450,3400,1800];

const filterprice = prices.filter((p) => {return p<500});
console.log(filterprice);

const names = ['mariya' , 'marriyum','neha','nisha'];

//create filter to get names with length greater than 5

const filternames = names.filter((n) => {return n.length>5});
console.log(filternames);

//
const names1 = ['mariya' , 'marriyum','sneha','nisha'];
const filternames1 = names1.filter((n) => {return n.startsWith('s')});
console.log(filternames1);

//

const squ = ['625','428','344','692','25','4','125'];
const filterperfectsqu = squ.filter((n) => {return Math.sqrt(n)});
console.log(filterperfectsqu);