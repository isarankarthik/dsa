class Queue
{
    constructor()
    {
        this.items = [];
        this.size = 0;
        this.front = 0;
        this.rear = 0; 
    }

    push(x)
    {
        this.items[this.rear] = x;
        this.size++;
        this.rear++;
    }

    pop()
    {
        if (this.size === 0) return "Underflow";

        let poppedValue = this.items[this.front];

        delete this.items[this.front];

        this.front++;

        this.size--;

        if (this.front == this.rear) {
            this.front = 0;
            this.rear = 0;
        }

        return poppedValue;
    }

    peek()
    {
        if (this.size === 0) return [];

        return this.items[this.front];
    }

    empty()
    {
        return this.size === 0;
    }
}