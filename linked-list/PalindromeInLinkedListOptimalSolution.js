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

function isPalindrome(head)
{
    let slow = head;
    let fast = head;
    while (fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;

    while (slow) 
    {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let first = head;
    let second = prev;

    while (second)
    {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;
}