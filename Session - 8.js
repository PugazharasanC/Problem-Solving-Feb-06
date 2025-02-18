//? Day 8: Linked Lists
//* Session Focus: Introduction to linked lists and basic operations: insertion, deletion, and traversal.
//? Session Practice Questions:
//! Insert a node at the beginning of a linked list.

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtFirst(data) {
        this.head = new Node(data, this.head)
    }

    insertAtLast(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let head = this.head;
            while (head.next != null) {
                head = head.next;
            }
            head.next = newNode;
        }
    }

    deleteAtFirst() {
        this.head = this.head.next;
        // let firstNode = this.head;
        // this.head = firstNode.next;
        // firstNode.next = null;
        // firstNode.data = null;
    }

    deleteAtLast() {
        if (this.head != null) { // checking whether a list is empty or not
            // If list is not empty
            if (this.head.next == null) { // Checking list has only one node
                // if list has only one node
                this.head = null;
            } else {
                // if list has more than one node
                let head = this.head;
                while (head.next.next != null) { // find the node which is prev to the last node
                    head = head.next;
                }
                head.next = null;
            }
        }
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr != null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    middleNode() {
        let fast = this.head;
        let slow = this.head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    removeDuplicatesSorted() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null) {
            if (slow.data != fast.data) {
                slow = slow.next;
                slow.data = fast.data;
            }
            fast = fast.next;
        }
        slow.next = null;
    }

    toArray() {
        const res = [];
        let head = this.head;
        while (head != null) {
            res.push(head.data);
            head = head.next;
        }
        return res;
    }

    makeCycle() {
        let head = this.head;
        let temp = null;
        while (head.next != null) {
            if (!temp && Math.random() < 0.2) {
                temp = head;
            }
            head = head.next;
        }
        head.next = temp;
    }

    dedectCycle() {
        let fast = this.head;
        let slow = this.head;
        while (fast != null && fast.next != null) {
            console.log(fast.data, slow.data)
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) {
                return true;
            }
        }
        return false;
    }
}


function merge(list1, list2) {
    let head1 = list1.head;
    let head2 = list2.head;
    const list = new LinkedList();
    while (head1 != null && head2 != null) {
        if (head1.data < head2.data) {//O(n+m)
            list.insertAtLast(head1.data);
            head1 = head1.next;
        } else {
            list.insertAtLast(head2.data);
            head2 = head2.next;
        }
    }
    while (head1 != null) {
        list.insertAtLast(head1.data);
        head1 = head1.next;
    }
    while (head2 != null) {
        list.insertAtLast(head2.data);
        head2 = head2.next;
    }
    return list;
}
const list1 = new LinkedList();
const list2 = new LinkedList();
list1.insertAtLast(1);
list1.insertAtLast(2);
list1.insertAtLast(2);
list2.insertAtLast(2);
list1.insertAtLast(3);
list2.insertAtLast(3);
list1.insertAtLast(3);
list2.insertAtLast(4);
list1.insertAtLast(4);
list2.insertAtLast(4);
list1.insertAtLast(5);
list2.insertAtLast(6);
list2.insertAtLast(6);
list1.insertAtLast(6);
list1.insertAtLast(6);
list2.insertAtLast(6);
console.log(list1.toArray())
console.log(list2.toArray())
const mergedList = merge(list1, list2);
console.log(mergedList.toArray())
mergedList.removeDuplicatesSorted();
console.log(mergedList.toArray())
console.log(mergedList.middleNode().data)
mergedList.makeCycle()
console.log(mergedList.dedectCycle())
// function mergeArr(arr1, arr2) {
//     return [...arr1, ...arr2].sort((a, b) => a - b); //O(nmlog(nm))
// }

// console.log(mergeArr([1, 3, 6, 8, 10], [2, 4, 6, 7, 8, 9]));
//* Delete the last node in a linked list.
//* Reverse a linked list iteratively.
//* Merge two sorted linked lists.
//* Remove duplicates from a sorted linked list.
//* Find the middle node of a linked list.
//* Detect a cycle in a linked list using fast and slow pointers.
// todo Post - Session Practice Questions:
// todo Reverse a linked list recursively.
// todo Check if a linked list is a palindrome.
// todo Remove the n - th node from the end of a linked list.
// todo Find the intersection point of two linked lists.
// todo Flatten a multilevel doubly linked list.
// todo Add two numbers represented by linked lists.
// todo Partition a linked list around a value x.
// todo Clone a linked list with random pointers.
// todo Split a linked list into two halves.
// todo Sort a linked list using merge sort.


// factorial;

// 5! => 5 * 4 * 3 * 2 * 1 => 5 * 4!
// 4! => 4 * 3 * 2 * 1 => 4 * 3!
// 3! => 3 * 2 * 1 => 3 * 2!
// 2! => 2 * 1 => 2 * 1!
// 1! => 1
// 0! => 1

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(

    factorial(5)
)