class Node 
{
    constructor(val) 
    {
        this.val = val;
        this.next = null;
    }
}

class LinkedList
{
    constructor() 
    {
        this.head = null;
        this.size = 0;
    }

    // adding the element at the beginning of the linkedlist.
    addAtHead(val)
    {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++;

    }

    // adding the element at the end of the linked list.
    addAtTail(val)
    {
        let node = new Node(val);
        let curr = this.head;
         
        while (curr.next!=null) {
            curr = curr.next;
        }

        curr.next = node;
        this.size++;
    }

    // looping the full linked list and printing the value 
    traverseList()
    {
        let curr = this.head;
        while (curr){
            console.log(`the value of the linked list is ${curr.val}`);
            curr = curr.next;
        }
    }

    // adding an element at the specific index
    addElementAtSpecificIndex(index, val)
    {
        if (index === 0) return this.addAtHead(val);
        else if (index === this.size) return this.addAtTail(val);

        let count = 0;
        let curr = this.head;
        let node = new Node(val);
        while (curr) {
            count++;
            if (count === index-1) {
                let temp = curr.next;
                curr.next = node;
                node.next = temp;
                break;
            }
            curr = curr.next;
        }
        this.size++;
    }

}

