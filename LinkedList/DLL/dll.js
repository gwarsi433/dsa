class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null
    }

    // Add at End
    append(val) {
        let node = new ListNode(val)
        if (this.head == null) {
            this.head = this.tail = node
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node

    }

    // Add at beginning
    prepend(val) {
        let node = new ListNode(val)
        if (this.head == null) {
            this.head = this.tail = node
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    //printNodes
    printNodes() {
        let curr = this.head
        let res = ""
        while (curr) {
            res += curr.val + "<->"
            curr = curr.next
        }
        console.log(res + "null");
    }
    //insert
    insertNode(valueToSearch, valueToInsert) {
        let node = new ListNode(valueToInsert)
        if (!this.head) {
            return
        }
        let curr = this.head
        while (curr) {
            //If curr reaches tail
            if (curr.val == valueToSearch) {
                if (curr == this.tail) {
                    curr.next = node
                    node.prev = curr
                    this.tail = node
                }
                else {
                    node.next = curr.next;
                    curr.next.prev = node
                    node.prev = curr
                    curr.next = node
                    return
                }
            }
            curr = curr.next
        }
    }
    //deleteNode

    deleteNode(valueToDelete) {
        let curr = this.head
        while (curr) {
            if (curr.val == valueToDelete) {
                // Only one node present
                if (curr.val == this.head && curr == this.tail) {
                    this.head = this.tail = null
                }
                // Delete head
                else if (curr.val == this.head) {
                    this.head = curr.next
                    this.head.prev = null
                }
                // Delete tail
                else if (curr == this.tail) {
                    this.tail = curr.prev
                    this.tail.next = null
                }
                else {
                    curr.prev.next = curr.next
                    curr.next.prev = curr.prev
                }


            }
            curr = curr.next

        }
    }


}


(function main() {
    // Write your code here
    // Try creating 1 <-> 2 <-> 3
    // Test with console.log()
    const dll = new DoubleLinkedList()
    dll.append(1)
    dll.append(2)
    dll.append(3)
    dll.prepend(0)
    dll.insertNode(2, 2.5)
    dll.printNodes()
    dll.append(3.5)
    dll.deleteNode(3)
    dll.printNodes()
}());