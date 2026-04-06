/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) return head
    let prevNode = head
    let nextNode = head.next

    while(nextNode){
        if(nextNode.val==prevNode.val){
            prevNode.next = nextNode.next
            nextNode=nextNode.next
        }
        else{
            prevNode=prevNode.next
            nextNode=nextNode.next
        }
    }

    return head
};
// @lc code=end

