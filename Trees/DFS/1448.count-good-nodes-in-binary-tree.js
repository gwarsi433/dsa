/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
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
var goodNodes = function(root) {

    let dfs =(node,maxSoFar)=>{

        if(!node) return 0;

        let left = dfs(node,Math.max(maxSoFar,node.val))
        let right = dfs(node,Math.max(maxSoFar,node.val))
        let ans = left+right;
        if(node.val>=maxSoFar) ans++;
    }

    return dfs(root,-Infinity)
    
};
// @lc code=end

