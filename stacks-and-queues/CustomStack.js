class Stack
{

    constructor()
    {
        this.items = [];
        this.size = 0;
    }

    push(val)
    {
        this.items[this.size] = val;
        this.size++; 
    }

    pop()
    {
        if (this.size === 0) return "Underflow";

        let poppedValue = this.items[this.size-1];

        this.size--;

        delete this.items[this.size];

        this.items.length = this.size;

        return poppedValue;
    }


    peek()
    {
        if (this.size === 0) return [];

        return this.items[this.size-1];
    }


    empty()
    {
        return this.size === 0;
    }

}