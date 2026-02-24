/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/running-sum-of-1d-array
 */
var runningSum = function(nums) {
    let result=[nums[0]]
    for(let i=1;i<nums.length;i++){
        result.push(result[result.length-1]+ nums[i])
    }
    return result
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))