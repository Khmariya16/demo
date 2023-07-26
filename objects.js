//obj1
person = ['hello','hello@123gmail.com',23];
user = { name: 'hello' , email : 'hello@123gmail.com', password : '365'};
console.log(user.name,user.password);
console.log(user['email'],user.password);

user.address = 'lko';
console.log(user);

user.password ='123';
console.log(user);

delete user.password;
console.log(user);

user.password ='123';
console.log(user);

let customkey = 'email';


console.log(user[customkey]);


//object2
let smartphone = {
    brand:'samsung',
    model:'s22',
    price:2500,
    color:'black',
};

smartphone.color = ['white','blue','black','pink'];
console.log(smartphone);
console.log(smartphone.color[3]);//indexing

smartphone.color.push('red');//insert using push
console.log(smartphone);

const smartphones = [
    {brand:'samsung',model:'s22',price:'23546',color:['red','white','blue']},
    {brand:'samsung',model:'s23',price:'86000',color:['red','white','blue']},
    {brand:'apple',model:'iphone 13',price:'80000',color:['red','white','yellow']},
    {brand:'oneplus',model:'9pro',price:'23000',color:['red','white','blue','green']},
    {brand:'oneplus',model:'nord',price:'23000',color:['red','white','blue','green']},
    {brand:'xiaomi',model:'mi 11',price:'32000',color:['red','white','blue']},
];

//syntax to access price of oneplus 9pro

console.log(smartphones[2].price);

//synatax to add xiaomi blue
smartphones[3].color.push('blue');
console.log(smartphones);

//syntax
smartphones[3].color.splice(2,3);
console.log(smartphones);


const brands = smartphones.map((p) => { return phone.brand })
console.log(new set(brands));


const brands1 = smartphones.map((p) => {return phone.brand});
console.log(new Set(brands1));


const person = {
    name :'mariya',
    age:'26'
};
console.log(person);








