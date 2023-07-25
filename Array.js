const arr1 =  [345 , 'hello' , false , console.log];

console.log(arr1);
console.log(typeof arr1);

const movies = ['bahubali', 'games of thrones', 'twilight', 'interstleller', 'RRR'];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies[10]);

console.log(movies.at(-4));
console.log(movies.at(1));

movies[2] = 'hello';
console.log(movies)

//slicing

console.log(movies.slice(1,4));
console.log(movies.slice(1,-1));
console.log(movies.slice(2,100));

//adding elements in array

movies.push('flash');//ending
movies.unshift('nun');//starting

console.log(movies);

//removing ele from the array

movies.pop('flash');//ending
movies.shift('nun');//starting

console.log(movies);


//splice

console.log(movies.splice(2,2)); //index and no of ele to be removed

//
console.log(['ironman',...movies, 'batman']);

console.log(...movies.splice(0,3),'new element',...movies.slice(3));

//array traversal
