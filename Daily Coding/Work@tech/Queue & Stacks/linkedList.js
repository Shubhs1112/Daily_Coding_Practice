
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            console.log('Invalid index');
            return;
        }
        if(index === 0){
            this.prepend(value);
        }
        else{
            const node = new Node(value);
            let prev = this.head;

            for(let i=0; i < index-1; i++){
                prev =  prev.next;
            }

            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            console.log(`List is empty..`);
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            console.log(`Node has been deleted with the value: ${value}`)
        }
        else{
            let prev = this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                let removedNode;
                removedNode = prev.next;
                prev.next =  removedNode.next;
                this.size--;
                console.log(`Node has been deleted with the value: ${value}`);
            }
            return null;
        }
    }
    removeFrom(index){
        if(index < 0 || index >= this.size){
            console.log('Invalid index');
            return null;
        }

        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        }
        else{
            let prev = this.head;
            for(let i = 0; i < index-1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        console.log(`Removed node at index ${index} with value ${removedNode.value}`);
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    search(value){
        if(this.isEmpty()){
            console.log('List is Empty...');
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            }
            curr = curr.next;
            i++; 
        }
        return -1;
    }

    reverse(){
        let prev = null;
        let curr = this.head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next; 
        }
        this.head = prev;
    }
    print(){
        if(this.isEmpty()){
            console.log('List is Empty...');
        }
        else{
            let curr = this.head;
            let listValues = '';

            while(curr){
                listValues+=`${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();

// Start performing actions here 

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.insert(40,0);
list.insert(35,1);
list.insert(25,3);
list.insert(15,5);
list.removeFrom(1);
list.removeValue(15);
console.log('Current linked list: ');
list.print();
console.log('After reversing the Linked list: ');
list.reverse();
list.print();


console.log(`Is LinkedList Empty ? : ${list.isEmpty()}`);
console.log(`LinkedList Size ? : ${list.getSize()}`);