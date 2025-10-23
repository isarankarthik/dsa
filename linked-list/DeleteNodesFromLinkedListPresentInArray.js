/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */ 

function removeNodesInArray(head, nums)
{
    if (!head || !head.next) return head;
    let dummyNode = new ListNode(0, head);
    let curr = dummyNode;
    let numsSet = new Set(nums);

    while (curr.next)
    {
        if (numsSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummyNode.next;
}