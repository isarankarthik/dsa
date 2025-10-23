/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */


function findMiddle(head)
{
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

function reverseList(head)
{
    let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}
function reorderList(head)
{
    let middle = findMiddle(head);
    let reversedList = reverseList(middle.next);
    middle.next = null;
    let curr = head;
    while (curr && reversedList) 
    {
        let temp1 = curr.next;
        let temp2 = reversedList.next;

        curr.next = reversedList;
        reversedList.next = temp1;

        curr = temp1;
        reversedList = temp2;
    }
    return head;
}