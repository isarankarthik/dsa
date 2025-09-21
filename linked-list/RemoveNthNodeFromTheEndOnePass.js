/*Definition for Singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    removeNthFromEnd(head, n) {
        let sentinel = new ListNode(0, head);
        let fast = sentinel;
        for (let i = 0; i<n; i++) {
            fast = fast.next;
        }

        let slow = sentinel;
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return sentinel.next;
    }
}