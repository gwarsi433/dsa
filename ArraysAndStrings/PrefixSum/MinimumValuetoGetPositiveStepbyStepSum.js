/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let stepValue = nums[0]<1?Math.abs(nums[0])+1:nums[0]
    let sum =0
    let incrementCounter =0;
    for(let i=0;i<nums.length;i++){
        if(i==0)
         sum =stepValue + nums[0]
        else
            sum = sum + nums[i] 
        if(sum<1){
            incrementCounter+= 1-sum
        }
    }
    return incrementCounter+stepValue
};

console.log(minStartValue([-3,2,-3,4,2]))
console.log(minStartValue([1,2]))
console.log(minStartValue([1,-2,-3]))