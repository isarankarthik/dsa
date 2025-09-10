/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function checkPalindrome(head)
{
    let elements = [];
    let curr = head;
    while (curr)
    {
        elements.push(curr.value);
        curr = curr.next;
    }
    let left = 0;
    let right = elements.length-1;
    while (left <= right)
    {
        if (elements[left] != elements[right]) {
            return false;
        }
        left = left+1;
        right = right-1;
    }
    return true;
}