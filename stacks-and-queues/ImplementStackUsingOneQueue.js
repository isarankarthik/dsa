var MyStack = function() {
    this.items = [];
    this.size = 0;
};

MyStack.prototype.push = function (x) {
    this.items.push(x);
    this.size++;

    for (let i = 0; i<this.size-1; i++)
    {
        this.items.push(this.items.shift());
    }
};

MyStack.prototype.pop = function()
{
    if (this.size === 0) return "Underflow";

    let removedElement = this.items.shift();
    this.size--;
    return removedElement;
}


MyStack.prototype.peek = function () {
    if (this.size === 0) return "Underflow";

    return this.items[0];
}

MyStack.prototype.empty = function () {
    return this.size === 0;
}