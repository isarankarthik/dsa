class StackQueue
{
    constructor()
    {
        this.stack1 = [];
        this.stack2 = [];
    }

    addElements(val)
    {
        this.stack1.push(val);
    }

    removeElements()
    {
        if (this.isEmpty()) return "Underflow";

        if (this.stack2.length === 0) this.moveElementsToStack2();

        return this.stack2.pop();
    }

    peek()
    {
        if (this.isEmpty()) return "Underflow";

        if (this.stack2.length === 0) this.moveElementsToStack2();

        return this.stack2[this.stack2.length-1];
    }

    isEmpty()
    {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    moveElementsToStack2()
    {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
}