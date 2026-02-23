/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/maximum-average-subarray-i
 */
var findMaxAverage = function(nums, k) {
    let curr =0;
    for(let i =0;i<k;i++){
        curr=curr + nums[i]
    }

    let max = curr
    console.log(max)

    for(let i=k;i<nums.length;i++){
        curr+=nums[i]-nums[i-k];

        max = Math.max(max,curr)
    }
    return max/k
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4))
console.log(findMaxAverage([5],1))
