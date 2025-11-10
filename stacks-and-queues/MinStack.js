/**
 * The problem is to design a stack which does all the insertion, pop, retrival of the top and the returning of the min element in O(1).
 * 
 */
class MinStack
{

    constructor()
    {
        this.stack = [];
    }

    /**
     * push -> pushes the element into the stack.
     */

    push(val)
    {
        if (this.stack === 0) 
        {
            this.stack.push[val, val];
        } else {
            let minVal = Math.min(val, this.stack[this.stack.length-1][1]);
            this.stack.push([val, minVal]);
        }
    }

    /**
     * pop -> returns void and removes the element from the stack.
     */
    pop()
    {
        this.stack.pop();
    }

    /**
     * top -> return the top value
     */

    top()
    {
        return this.stack[this.stack.length-1][0];
    }

    /**
     * @return {number}
     */

    getMin()
    {
        return this.stack[this.stack.length-1][1];
    }
}

/**
 * So basically what we have done in this problem is that, we're storing the min value and the value to be inserted as a pair in the stack. 
 * Based on that we're retriving the minimum value.
 */