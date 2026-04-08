/*
 * @lc app=leetcode id=2095 lang=javascript
 *
 * [2095] Delete the Middle Node of a Linked List
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
var deleteMiddle = function(head) {

    if(head.next==null) return null

    let slow=head
    let fast=head.next.next;

   

    while(fast && fast?.next){
        slow=slow.next
        fast=fast.next.next
    }
    slow.next=slow.next.next
    return head
    
};
// @lc code=end

