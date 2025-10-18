/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function rotateList(head)
{
    if (!head || !head.next || !k) return head;
    // step 1: finding the length of the list.
    let listLength = 0;
    let ptr1 = head;
    while (ptr1) {
        listLength++;
        ptr1 = ptr1.next;
    }
 
    // step 2: if the number of rotations is multiple of the length, then return the list as it is, as it will be same. 
    if (Math.floor(k%listLength) == 0) return head;

    let slow = head;
    let fast = head;

    // move k steps forward and then traeverse and break the list like remove nth node from the list.
    for (let i = 0; i < Math.floor(k%listLength); i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
}