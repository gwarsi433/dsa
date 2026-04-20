/*
 * @lc app=leetcode id=2434 lang=javascript
 *
 * [2434] Using a Robot to Print the Lexicographically Smallest String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
  let stack =[]
  let result =''
  let minRight = new Array(s.length).fill('')
  minRight[s.length-1]=s[s.length-1]
  for(let i=s.length-2;i>=0;i--){
    minRight[i]=s[i]<minRight[i+1]?s[i]:minRight[i+1]
  }
  
  for(let i =0;i<s.length;i++){
    stack.push(s[i])
    let minChar = i+1<s.length?minRight[i+1]:minRight[i]
    while(stack.length && stack[stack.length-1]<=minChar){
        result+=stack.pop();
    }
  }

  while(stack.length) result+=stack.pop()
  return result
};
// @lc code=end

console.log(robotWithString('baca'))

