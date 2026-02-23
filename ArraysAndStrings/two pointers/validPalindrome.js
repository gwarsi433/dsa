

/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-palindrome
 */
var isPalindrome = function(s) {
    let left =0;
    let right=s.length-1;
    let sanitizedString = s.replace(/[^a-z0-9]/gi,'').toLowerCase()

    if(s.length==0 || s.length==1){
        return true
    }

    while(left>right){
        if(sanitizedString[left]!==sanitizedString(right)){
            return false
        }
        else{
            left++;
            right--;
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome('"race a car"'))
console.log(isPalindrome('" "'))



