/*
 * @lc app=leetcode id=1544 lang=javascript
 *
 * [1544] Make The String Great
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = []
    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            if (stack.length>0 && ( stack[stack.length-1]!==ch && stack[stack.length - 1].toLowerCase() == ch)) stack.pop()
            else {
                stack.push(ch)
            }
        }
        else if (ch >= 'A' && ch <= 'Z') {
            if (stack.length>0 && (stack[stack.length-1]!==ch &&stack[stack.length - 1].toUpperCase() == ch)) stack.pop()
            else {
                stack.push(ch)
            }
        }
    }
    return stack.join('')

};
// @lc code=end

console.log(makeGood("leEeetcode"))
console.log(makeGood("s"))
