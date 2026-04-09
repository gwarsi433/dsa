/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head == null) return null
    if (head.next == null) return head
    let odd = head
    let firstEven = even = head.next

    while (even && even.next) {
            odd.next = even.next
            odd = odd.next
        
        
            even.next = odd.next
            even = even.next
        
        odd.next = firstEven
    }
    return head

};
// @lc code=end

