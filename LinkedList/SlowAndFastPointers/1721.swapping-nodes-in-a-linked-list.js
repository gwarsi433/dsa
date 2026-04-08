/*
 * @lc app=leetcode id=1721 lang=javascript
 *
 * [1721] Swapping Nodes in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let fast = head
    for (let i = 1; i < k; i++) {
        fast = fast.next
    }
    let left = fast
    let slow = head
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    let temp = slow.val
    slow.val = left.val
    left.val = temp

    return head

};
// @lc code=end

