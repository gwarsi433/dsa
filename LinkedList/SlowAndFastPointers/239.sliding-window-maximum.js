/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let ans = []
    let queue = []

    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) queue.pop()

        queue.push(i)

        if (i == queue[0] + k) queue.shift()

        if (i >= k - 1) ans.push(nums[queue[0]])
    }
    return ans

};
// @lc code=end

