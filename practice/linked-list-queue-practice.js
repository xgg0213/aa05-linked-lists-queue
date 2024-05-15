// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here 
        // O(n) method
        let n;
        if (!this.head) {
            n = 0;
            return n;
        }
        
        let current = this.head;
        n = 1;
        while(current.next) {
            current = current.next;
            n++;
        }
        return n;

        // O(1) method

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here 
        let sum = 0;
        let current = this.head;
        
        // empty list
        if (!this.head) return sum;

        // non-empty list
        while(current) {
            sum += current.value;
            current = current.next;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here 
        // empty list
        if (!this.head) return null;

        // non-empty list
        let current = this.head;
        let n = 0;
        let sum = 0;
        while(current) {
            sum += current.value;
            n++;
            current = current.next;
        }
        return sum/n;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here 
        // empty list
        if (!this.head || n > this.listLength()) return null;

        // non-empty list
        let count = 0;
        let current = this.head;
        while (count<n) {
            current = current.next;
            count++;
        }
        return current;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here 
        let mid;
        if (this.listLength() % 2 === 0) mid = this.listLength()/ 2 - 1;
        else mid = Math.floor(this.listLength()/ 2);
        let current = this.head;
        let n = 0;
        while (n < mid) {
            current = current.next;
            n++;
        }
        return current;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n);
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        // Your code here 
        let newList = new SinglyLinkedList();

        let n = this.listLength()-1;

        while(n>=0) {
            newList.addToTail(this.findNthNode(n).value);
            n--;
        }
        return newList;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here 
        let current = this.head;
        let prev = null;
        let next = null;
        while(current) {
            next = current.next
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        return this;



        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }
    // added this manually, listLength not included in the original code
    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here 
        // O(n) method
        let n;
        if (!this.head) {
            n = 0;
            return n;
        }
        
        let current = this.head;
        n = 1;
        while(current.next) {
            current = current.next;
            n++;
        }
        return n;

        // O(1) method

    }

    // added this manually, listLength not included in the original code
    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here 
        // empty list
        if (!this.head || n > this.listLength()) return null;

        // non-empty list
        let count = 0;
        let current = this.head;
        while (count<n) {
            current = current.next;
            count++;
        }
        return current;

        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here 
        // empty list
        if (this.head === null) return null;

        // non-empty list
        let head = this.head;
        let tail = this.tail;

        if (this.listLength() % 2 === 1) {
            while (head !== tail) {
                head=head.next;
                tail=tail.prev;
            }
            return head;
        }

        while(head !== tail.prev) {
            head=head.next;
            tail=tail.prev
        }
        return head;
        
        // Write your hypothesis on the time complexity of this method here
        // answer: O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here 
        let newList = new DoublyLinkedList();
        let n = this.listLength() -1;

        while(n>=0) {
            newList.addToTail(this.findNthNode(n).value);
            n--;
        }
        return newList;



        // Write your hypothesis on the time complexity of this method here
        // answer: O(n);
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here 
        let current = this.head;
        let prev = null;
        let next = null;


        while(current) {
            next = current.next;
            current.prev = next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        this.tail = this.findNthNode(this.listLength()-1);

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

list = new SinglyLinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);

list.reverseInPlace()
// console.log(list.reverseInPlace());

let cur = list.head;
for (let i = 6; i >= 1; i--) {
  console.log(cur.value)//.to.equal(i);
  cur = cur.next;
}