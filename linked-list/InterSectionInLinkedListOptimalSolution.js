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

function findIntersection(headA, headB)
{
    let p1 = headA;
    let p2 = head2;

    while (p1!=p2)
    {
        p1 = p1? p1.next : headB;
        p2 = p2? p2.next : headA;
    }
    return p1;
}