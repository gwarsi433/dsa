/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130] Maximum Twin Sum of a Linked List
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
var pairSum = function(head) {
    let maxVal=0;
    // 0. Base condtions
    if(!head) return 0
    // 1. Find middle pointer 
    let fast = slow =head;
    while(fast && fast.next){
        fast = fast.next.next
        slow=slow.next
    }
    // 2. Reverse second part of link list
    
    let curr = slow;
    let prev=null;
    while(curr){
        let nextPointer = curr.next;
        curr.next=prev;
        prev=curr
        curr=nextPointer;
    }

    // 3 Every node has its node ahead after mid. since we reversed
    while(prev){
        maxVal = Math.max(maxVal,head.val+prev.val)
        prev=prev.next;
        head=head.next
    }
    return maxVal

    
};
// @lc code=end

