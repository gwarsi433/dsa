/*
 * @lc app=leetcode id=946 lang=javascript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = new Array()
    let popIterator =0
    for(let i=0;i<pushed.length;i++){  
        stack.push(pushed[i])

        while(stack.length && popIterator<popped.length && stack[stack.length-1]==popped[popIterator]){
            stack.pop()
            popIterator++
        }
    }
    return stack.length==0
};
// @lc code=end

console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))

