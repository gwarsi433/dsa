/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val==val){
        head=head.next
    }
    if(head==null) return null

    let curr = head
    let prev={val:-1,next:head}

    while(curr){
        if(curr.val==val){
            prev.next=curr.next
            curr=curr.next
        }
        else{
            prev=curr
            curr=curr.next
        }
    }
    return head

    
};
// @lc code=end

