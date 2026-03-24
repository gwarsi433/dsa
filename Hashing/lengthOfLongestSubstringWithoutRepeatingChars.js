/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 */
var lengthOfLongestSubstring = function(s) {
    let left=0
    let map = new Map()
    let maxLength=0;

    for(let i =0;i<s.length;i++){
        if(map.has(s[i])){
            left = Math.max(map.get(s[i])+1,left)
        }
        map.set(s[i],i)
        maxLength= Math.max(maxLength,i-left+1)
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("tmmzuxt"))