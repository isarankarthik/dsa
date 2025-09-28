/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addNumbers(l1, l2)
{
    let temp = new ListNode(0);
    let curr = temp;
    while (l1 || l2 || carry) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum/10);
        curr.next = new ListNode(sum%10);
        curr = curr.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return temp.next;
}