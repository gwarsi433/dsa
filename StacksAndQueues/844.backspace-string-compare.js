/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let buildString = s => {
        let stack = []
        for (let ch of s) {
            if(ch!=='#'){
                stack.push(ch)
            }
            else if(stack.length){
                stack.pop()
            }
        }
        return stack.join('')
    }
    return buildString(s)===buildString(t)

};
// @lc code=end

