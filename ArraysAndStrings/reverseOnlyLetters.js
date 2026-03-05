/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/reverse-only-letters?envType=problem-list-v2&envId=ajc81mgt
 */
var reverseOnlyLetters = function(s) {
    let left =0;
    let right = s.length-1;
    let result = s.split('')
    let regex = /^[A-Za-z]+$/;
    while(left < right){
        while(!s[left].match(regex) && left<right) left++;
        while(!s[right].match(regex)&& right>left) right--;
        [result[left],result[right]]=[result[right],result[left]]
        left++;
        right--;
    }
    return result.join('')
};

console.log(reverseOnlyLetters("ab-cd"))
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))