class Stack{
    // constructor function
    constructor(){
        this.array = [];
    }

    append(data){
        this.array.push(data);
    }
    remove(){
        this.array.pop();
    }
    display(){
        console.log(`STACK information: \nElements present in Stack :${this.array.length} \nStack-Top :${this.array[this.array.length-1]}`);
        console.log(this.array);
    }
}

const myStack = new Stack();
myStack.append(5);
myStack.append(6);
myStack.remove();
myStack.append(7);
myStack.remove();
myStack.append(99);
myStack.append(125);
myStack.append(87);
myStack.append(7748);
myStack.remove();
myStack.append(74);
myStack.append(78);
myStack.display();

