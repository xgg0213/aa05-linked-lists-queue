// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        // Your code here 
        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    removeFromHead() {
        // Remove node at head

        // Your code here 
        
        if (this.head === null) {
            return undefined;
        }
    
        let head = this.head;
        if(this.head) {
            this.head = this.head.next;
        }
        this.length--;
        return head;


        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here 
        // if the list is empty
        if (this.head === null) return undefined;

        // if there is only one node
        // If there's only one node, remove it
        if (!this.head.next) {
            const res = this.head;
            this.head = null;
            this.length--;
            return res;
        }

        // if there are 1+ nodes
        let current = this.head;
        let previous;
        while(current.next) {
            previous = current;
            current = current.next;
        }

        let res = current;
        previous.next = null;
        this.length --;
        return res;


        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here 
        if (this.head === null) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(1)
    }

    print() {
        // Print out the linked list

        // Your code here 
        if (this.head === null) return undefined;
        let current = this.head;

        while (current) {
            // process.stdout.write(`${current.value} -> `);
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
