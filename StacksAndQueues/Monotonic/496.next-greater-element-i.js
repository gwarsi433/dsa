/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack =[]
    let nextGreaterElement =new Map()
    let result =[]

    for(let i=0;i<nums2.length;i++){
        while(stack.length && nums2[i]>stack[stack.length-1]){
            nextGreaterElement.set(stack[stack.length-1],nums2[i])
            stack.pop()
        }
        stack.push(nums2[i])
    }

    for(let i =0;i<nums1.length;i++){
        let temp = nextGreaterElement.get(nums1[i])
        result.push(temp??-1)
    }
    return result
};
// @lc code=end
console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
console.log(nextGreaterElement([2,4],[1,2,3,4]))
