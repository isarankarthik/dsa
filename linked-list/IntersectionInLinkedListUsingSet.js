/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


function interSectionList(headA, headB)
{
    let interSet = new Set();
    let curr1 = headA;
    let curr2 = headB;
    while (curr2)
    {
        interSet.add(curr2);
        curr2 = curr2.next;
    }

    while (curr1)
    {
        if (interSet.has(curr1)) {
            return curr1;
        }
        curr1 = curr1.next;
    }
    return null;
}