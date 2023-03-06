//  Incomplete


class Queue{

    constructor(c){
        this.front = 0;
        this.rear = 0;
        this.capacity = c;
        this.queue = new Array(this.capacity);
    }

    enqueue(value){
        if(this.capacity == this.rear){
            console.log('Queue is Full...');
            return;
        }
        else{
            this.queue[this.rear] = value;
            this.rear++;
        }
    }

    dequeue(){
        if(this.front == this.rear){
            console.log(`Queue is Empty...`);
            return;
        }
        else{
            
        }
    }

}