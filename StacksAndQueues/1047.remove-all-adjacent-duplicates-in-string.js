/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for(let ch of s){
        if(stack.length && stack[stack.length-1]==ch){
            stack.pop()
        }
        else{
            stack.push(ch)
        }
    }
    return stack.join('')
};
// @lc code=end

