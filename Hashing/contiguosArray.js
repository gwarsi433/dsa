/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let map = new Map()
    map.set(0, -1)
    let maxLength = 0;
    let zeroes = 0, ones = 0;
    for (let [i, v] of nums.entries()) {
        v== 1 ? ones++ : zeroes++;
        let diff = zeroes - ones

        if (map.has(diff)) {
            maxLength = Math.max(maxLength, i - map.get(diff))
        }
        else {
            map.set(diff, i)
        }
    }
    return maxLength
};

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]))