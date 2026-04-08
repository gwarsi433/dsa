/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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
* @return {number}
*/
var getDecimalValue = function (head) {
    let curr = head;
    let length = -1
    let ans = 0
    while (curr) {
        length++
        curr = curr.next
    }

    while (head) {
        if (head.val == 1) {
            ans += Math.pow(2, length)

        }
        length--
        head = head.next
    }
    return ans

};
// @lc code=end

