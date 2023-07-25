//Q1 Create array of names and filter to get all names starting with s.

const names1 = ['mariya' , 'marriyum','sneha','nisha','samira'];
const filternames1 = names1.filter((n) => {return n.startsWith('s')});
console.log(filternames1);


//Q2 create an array of numbers and filter to get all perfect square.

const squ = [4, 22, 9, 13, 24, 36, 49, 64, 625, 2];
function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }
  const filterperfectSqu = squ.filter(isPerfectSquare);
  
  console.log(filterperfectSqu);


//Q3 create an array to filter all prime numbers

const nos= [5,12,13,16,9,7,11,29,17];
const filterprimeNums = nos.filter(isPrime);
console.log(filterprimeNums);
function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}