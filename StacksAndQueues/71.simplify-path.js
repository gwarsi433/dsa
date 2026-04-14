/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let components = path.split("/")
    let stack = []

    for (let comp of components) {
        if (comp == "" || comp == ".") continue

        if (comp == "..") {
            if (stack.length) stack.pop()
        }
        else {
            stack.push(comp)
        }
    }
    return "/" + stack.join("/");
};
// @lc code=end

// console.log(simplifyPath('/home/'))
// console.log(simplifyPath('/home//foo/'))
// console.log(simplifyPath('/home/user/Documents/../Pictures'))
// console.log(simplifyPath('/../'))
// console.log(simplifyPath('/.../a/../b/c/../d/./'))
console.log(simplifyPath("/a//b////c/d//././/.."))

