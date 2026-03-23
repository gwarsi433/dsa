/**
 * @param {string} text
 * @return {number}
 * https://leetcode.com/problems/maximum-number-of-balloons
 */
var maxNumberOfBalloons = function (text) {
    var min = 1;
    var map = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0]
    ])

    for (let i of text) {
        if (map.has((i))) {
            map.set(i, (map.get(i) || 0) + 1)
        }
    }

return Math.min(map.get('b'),map.get('a'),Math.floor((map.get('l'))/2),Math.floor((map.get('o'))/2),map.get('n'))
}

console.log(maxNumberOfBalloons('nlaebolko'))
console.log(maxNumberOfBalloons('loonbalxballpoon'))
console.log(maxNumberOfBalloons('leetcode'))