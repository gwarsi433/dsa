/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack =[]
    let bracketPairs = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let c of s){
        if(c in bracketPairs){
            stack.push(c)
        }else{
            if(stack.length==0) return false
            let lastOpenBracket = stack.pop()
            if(bracketPairs[lastOpenBracket]!==c) return false
        }
    }
    return !stack.length
};
// @lc code=end

