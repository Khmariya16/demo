const nums = [2,3,4,5,6,7,8,9];

for(let i=0; i<nums.length; i++){
    console.log(nums[i] ** 2);
}

for(let i of nums){
    console.log(i ** 2);
}