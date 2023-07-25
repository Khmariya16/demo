function addnums(a,b){//defining a fn
   var c = a+b;
    console.log(c);
}
addnums(10,20);
//console.log(c);//calling a fn

const getpercentage = function(m1, m2, m3, m4, m5=90){
    console.log(m1, m2, m3, m4, m5);
    let percent = (m1+m2+m3+m4+m5)/5;
    console.log(percent);
    return percent;
};
const res = getpercentage(30,20,30,40,50);
console.log(res);

const getfactorial = (n) => {
    let f = 1;
    for(let i=2;i<=n;i++){
        f = f*i;
    };
    return f;
    
};
const ans = getfactorial(5);
    console.log(ans);
