/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function oddEvenLinkedList(head)
{
    let oddNode = head;
    let evenNode = head.next;
    let firstEvenNode = evenNode;
    
    while (evenNode && evenNode.next)
    {
        oddNode.next = oddNode.next.next;
        evenNode.next = evenNode.next.next;

        oddNode = oddNode.next;
        evenNode = evenNode.next;
    }

    oddNode.next = firstEvenNode;
    return head;
}