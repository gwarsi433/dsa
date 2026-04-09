/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

var MyLinkedList = function () {
    this.head = null
    this.tail = null
    this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.head == null) return -1
    let current = this.head
    let count = 0
    while (current) {
        if (count == index) return current.val
        current=current.next
        count++
    }
    return -1

};



/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = { val: val, next: null }
    let currentHead = this.head
    node.next = currentHead
    this.head = node
    this.length++
    if (this.tail == null) {
        this.tail = node
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = { val: val, next: null }
    if (this.head == null) {
        this.head = node
        this.tail = node
        this.length++
        return;
    }
    this.tail.next = node
    this.tail = node
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) return

    if (index == 0) {
        this.addAtHead(val)
        return;
    }
    if (index == this.length) {
        this.addAtTail(val)
        return;
    }
    let curr = this.head
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next
    }
    let node = { val: val, next: curr.next }
    curr.next = node
    this.length++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) return

    if (index == 0) {
        this.head = this.head.next

        if (this.length == 1) {
            this.tail = null
        }
        this.length--;
        return
    }
    let curr = this.head
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next
    }
    curr.next = curr.next.next
    if (curr.next == null) {
        this.tail = curr
    }
    this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

