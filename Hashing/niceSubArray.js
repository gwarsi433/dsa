/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/count-number-of-nice-subarrays
 */
var numberOfSubarrays = function (nums, k) {
    var map = new Map()
    map.set(0, 1)
    let ans = 0, curr = 0

    for (let i of nums) {
        curr += i % 2;
        ans += map.get(curr - k) || 0;
        map.set(curr, (map.get(curr) || 0) + 1)

    }
    return ans
};


console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3))
console.log(numberOfSubarrays([2, 4, 6], 3))
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2))