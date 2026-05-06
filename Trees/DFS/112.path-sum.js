/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    let dfs = (node, curr) => {

        if (!node) return false;

        if (!node.right && !node.left) {
            return (curr + node.val) == targetSum
        }

        curr = curr + node.val
        let left = dfs(node.left, curr)
        let right = dfs(node.right, curr)
        return left || right

    }
    return dfs(root, 0)
};
// @lc code=end

