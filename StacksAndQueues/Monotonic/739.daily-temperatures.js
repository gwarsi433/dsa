/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack =[]
    let ans =new Array(temperatures.length).fill(0)

    for(let i =0;i<temperatures.length;i++){
        while(stack.length && temperatures[stack[stack.length - 1]]<temperatures[i]){
            let j = stack.pop()
            ans[j]=i-j
        }

        stack.push(i)
    }
    return ans;

};
// @lc code=end


40,35,32,37,50

