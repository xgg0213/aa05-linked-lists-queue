const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here 
        let newNode = new SinglyLinkedNode(val);
        
        // with empty queue
        if (this.length===0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.length;
        }

        // with 1+ nodes
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this.length;


        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        let remove = this.tail;
        // Your code here 
        // empty queue
        if (this.length === 0) return null;

        // only 1 node
        if (this.length === 1) {
            const res = this.tail.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return res;
        }

        // >1 nodes
        
        const res = this.head.value;
        this.head = this.head.next;
        this.length--;
        return res;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}


queue = new Queue();
node = new SinglyLinkedNode('A');
// queue.enqueue('A');
// console.log(queue.head.value)//.to.equal('A');
// console.log(queue.tail.value)//.to.equal('A');

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue.head.value)//.to.equal('A');
queue.dequeue();
console.log(queue.head.value)//.to.equal('B');
queue.dequeue();
console.log(queue.head.value)//.to.equal('C');