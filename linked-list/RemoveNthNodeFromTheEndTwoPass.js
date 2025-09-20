/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curr = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }  

  if (length == n) {
    return head.next;
  } 

  let prev = null;
  let newCurr = head;

  for (let i = 0; i<length-n; i++) {
    prev = newCurr;
    newCurr = newCurr.next;
  }

  prev.next = newCurr.next;
  return head;
};