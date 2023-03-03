const LinkedList = require('./linkedList-tail');

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        return this.list.print();
    }
}

const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(12);
queue.enqueue(14);
queue.enqueue(16);
queue.enqueue(18);
queue.print();

queue.dequeue();
queue.dequeue();
console.log(`Head : ${queue.peek()}`);
console.log(`Is queue Empty: ${queue.isEmpty()}`);
queue.print();
