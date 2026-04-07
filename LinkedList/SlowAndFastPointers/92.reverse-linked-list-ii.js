/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = { val: 0, next: head };
    let nodeBeforeLeft = dummy;

    for(let i=1;i<left;i++){
        nodeBeforeLeft=nodeBeforeLeft.next;
    }
    let prev=null;
    let leftNode=nodeBeforeLeft.next
    let curr = nodeBeforeLeft.next
    let nextNode = null
    for(let i=0;i<right-left+1;i++){
        nextNode=curr.next
        curr.next=prev
        prev=curr
        curr=nextNode
    }

    nodeBeforeLeft.next=prev
    leftNode.next=curr

    return nodeBeforeLeft

};
// @lc code=end

