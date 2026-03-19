/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/missing-number
 */
var missingNumber = function(nums) {
    let arr = new Array(nums.length+1).fill(false)
    for(let i of nums){
        arr[i]=true
    }
    return arr.findIndex((value)=>value==false)

};


console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))