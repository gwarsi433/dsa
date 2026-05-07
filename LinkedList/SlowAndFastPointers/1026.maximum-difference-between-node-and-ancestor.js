/*
 * @lc app=leetcode id=1026 lang=javascript
 *
 * [1026] Maximum Difference Between Node and Ancestor
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
 * @return {number}
 */
var maxAncestorDiff = function (root) {
    let diff = 0;
    let helper = (node) => {
        if (node == null) return [Infinity, -Infinity]

        if (node.left == null && node.right == null) return [node.left, node.right]

        let left = helper(node.left)
        let right = helper(node.right)

        let min = Math.min(left[0],right[0])
        let max = Math.max(left[1],right[1])

        diff = Math.max(diff,Math.max(Math.abs(node.val-min),Math.abs(max-node.val)))
        
        min = Math.min(min,node.val)
        max = Math.max(max,node.max)

        return [min,max]
        
    }


    
    helper(root)
    return diff



};
// @lc code=end

