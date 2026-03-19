/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size==26
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))
console.log(checkIfPangram('leetcode'))