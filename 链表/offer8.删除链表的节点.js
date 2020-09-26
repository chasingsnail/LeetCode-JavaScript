/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let dummy = new ListNode(0)
  dummy.next = head

  let cur = dummy

  while (cur !== null) {
      if (cur.next.val === val) {
          cur.next = cur.next.next
          break
      }
      cur = cur.next
  }

  return dummy.next
};