/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    let count = 0
    let set = new Set(arr)

    for (let i of arr) {
        if (set.has(i + 1)) count += 1
    };
    return count
}


console.log(countElements([1, 2, 3]))
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]))