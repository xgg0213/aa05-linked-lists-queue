// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here 
        let newNode = new DoublyLinkedNode(val); 
        this.length++;

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    removeFromHead() {
        // Remove node at head

        // Your code here 
        if (this.head === null) return undefined;

        // if only 1 node
        if (this.length === 1) {
            let result = this.head.value;
            this.length = 0;
            this.head = null;
            this.tail = null;
            return result;
        }

        // if 1+ nodes
        let res = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.length --;
        return res;


        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here 
        if (this.tail === null) return undefined;

        // if only 1 node
        if (this.length === 1) {
            let res = this.tail;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return res.value;
        }

        // if 1+ nodes;
        let res = this.tail;
        let previous = this.tail.prev;
        this.tail = previous;
        previous.next = null;


        this.length--;
        return res.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Your code here 
        if (this.head === null) return undefined;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here 
        if (this.head === null) return undefined;

        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}

list = new DoublyLinkedList()
list.addToHead('C');
list.addToHead('B');
list.addToHead('A');

const head = list.head;
const middle = list.head.next;
const tail = list.tail;


console.log(list.removeFromHead())//.to.equal('A');
console.log(list.head.value)//.to.equal('B');

console.log(list.removeFromHead())//.to.equal('B');
console.log(list.head.value)//to.equal('C');

console.log(list.removeFromHead())//.to.equal('C');
console.log(list.head)//.to.equal(null);
