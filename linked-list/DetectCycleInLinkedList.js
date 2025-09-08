/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function findCycle(head)
{
    let elementSet = new Set();
    let curr = head;
    
    while (curr) {
        if (elementSet.has(curr)) {
            return true;
        } 

        elementSet.add(curr);
        curr = curr.next;
    }
    return false;
}