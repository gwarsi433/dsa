/**
 * @param {string} sentence
 * @return {boolean}
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size==26
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))
console.log(checkIfPangram('leetcode'))