const person = {
    name :'mariya',
    age:'26'
};
console.log(person);
console.log(person.name);
console.log(person["name"]);

//nested objects
const std = {
    name:'john',
    age:20,
    marks:{
        science:77,
        maths:84
    }
}
console.log(std.marks);
console.log(std.marks.science);

//object methods
const person1 = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person1.greet(); // hello
