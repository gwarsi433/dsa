/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/reverse-words-in-a-string-iii?envType=problem-list-v2&envId=ajc81mgt
 */
var reverseWords = function (s) {
    let arr = s.split(' ')

    for (let i = 0; i < arr.length; i++) {
        let wordSplit = arr[i].split('')
        let l = 0;
        let r = wordSplit.length - 1
        while (l < r) {
            [wordSplit[l],wordSplit[r]] = [wordSplit[r], wordSplit[l]]
            l++;
            r--;
        }
        arr[i] = wordSplit.join('')

    };
    return arr.join(' ')
}


console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))