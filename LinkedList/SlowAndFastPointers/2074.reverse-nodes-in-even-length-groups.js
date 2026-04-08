/*
 * @lc app=leetcode id=2074 lang=javascript
 *
 * [2074] Reverse Nodes in Even Length Groups
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
var reverseEvenLengthGroups = function (head) {
    let groupSize = 0;
    let curr = head
    let lastofPrevGroup = { val: 0, next: head }
    let elementsInGroup = 0
    let lastOfEvenGroup = null

    var reverseNodes = (lastofPrevGroup, head, count) => {
        let curr = head
        let prev = null
        let nextNode = curr.next
        let numberOfElements =0
        while (curr && count > 0) {
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
            count--;
            numberOfElements++;
        }
        head.next = nextNode
        lastofPrevGroup.next = prev
        return numberOfElements
    }



    while (curr) {
        groupSize++
        if (groupSize % 2 == 0) {
            elementsInGroup=reverseNodes(lastofPrevGroup, curr, groupSize)
            lastOfEvenGroup=curr
            curr = curr.next
        }
        else {
            var incrementBy = groupSize
            while (curr && incrementBy > 0) {
                lastofPrevGroup = curr
                curr = curr.next
                incrementBy--
                elementsInGroup++
            }
        }

    }

    //check last group and fix

    if (groupSize % 2 == 0 && elementsInGroup%2==1){
        reverseNodes(lastofPrevGroup,lastofPrevGroup.next,elementsInGroup)
    }
    else if(groupSize%2==1 && elementsInGroup%2==0){
        reverseNodes(lastOfEvenGroup,lastOfEvenGroup.next,elementsInGroup)
    }



        return head
};
// @lc code=end

1-1-2-1-2

1-0-1-3

1-0-1-3


