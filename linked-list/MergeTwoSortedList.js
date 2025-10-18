/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeSortedList(list1, list2)
{

    if (!list2) return list1;
    if (!list1) return list2;
    let curr = new ListNode(0);
    let temp = curr;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }

        // post the merge, we have to move to the next element so that the new element gets inserted correctly.
        temp = temp.next;
    } 

    if (list1 !== null) {
        temp.next = list1;
    } 

    if (list2 !== null) {
        temp.next = list2;
    } 

    return curr.next;


}