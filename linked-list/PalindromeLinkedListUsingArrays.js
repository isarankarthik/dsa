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
    let data = [];
    let curr = head;
    while (curr) 
    {
        data.push(curr.val);
        curr = curr.next;
    }

    let left = 0;
    let right = data.length -1;
    while (left <=right) {
        if (data[left]!=data[right]) return false;

        left = left + 1;
        right = right -1;
    }
    return true;
}