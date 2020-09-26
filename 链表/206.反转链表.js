/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 迭代
  let prev = null
  let cur = head
  while (cur !== null) {
    let tempNext = cur.next
    cur.next = prev
    prev = cur
    cur = tempNext
  }

  // 递归
  if (head === null || head.next === null) return head
    const p = reverseList(head.next)
    head.next.next = head
    head.next = null

    return p
};