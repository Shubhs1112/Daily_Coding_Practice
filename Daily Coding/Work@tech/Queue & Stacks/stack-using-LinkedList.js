const LinkedList = require('./linkedList-tail');

class LinkedListStack{

    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.head.value;
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

const stack = new LinkedListStack();
console.log(stack.isEmpty());
console.log('After Pushing Elements: ');
stack.push(20);
stack.push(10);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.getSize()); 
stack.print();
console.log('After Poping Elements: ');
stack.pop();
stack.pop();
console.log(stack.getSize()); 
stack.print();
