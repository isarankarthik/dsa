/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function removeNodes(head, val)
{
    // creation of a dummy head

    let sentinel = new ListNode(0, head);

    let prev = sentinel;
    let curr = sentinel;
    while (curr) 
    {
        if (curr.val == val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return sentinel.next;
}