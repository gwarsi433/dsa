/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = []

    for (let i = 0; i < asteroids.length; i++) {
        let last = stack[stack.length - 1]
        let current = asteroids[i]

        if (!stack.length || last < 0 || current > 0) {
            stack.push(current)
        }
        else if (-current == last) stack.pop()
        else if (-current >last) {
            stack.pop()
            i--
        }

    }
    return stack



};
// @lc code=end
console.log(asteroidCollision([5, 10, -5]))
// console.log(asteroidCollision([8, -8]))

