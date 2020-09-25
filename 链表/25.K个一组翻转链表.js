/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummy = new ListNode(0)
  dummy.next = head


  let prev = dummy

  let tail = prev

  while (tail !== null) {
    // 判断 tail 是否超出
    for (let i = 0; i < k && tail !== null; i++) {
      tail = tail.next
    }
    console.log('tail', tail)
    if (tail === null) {
      break
    }

    let next = tail.next

    let start = prev.next

    // 断开链表
    tail.next = null
    
    const result = reverseList(start)
    
    prev.next = result
    start.next = next

    prev = start
    tail = prev
  }

  return dummy.next
};

var reverseList = function(head) {

  // 递归
  if (head === null || head.next === null) return head
    const p = reverseList(head.next)
    head.next.next = head
    head.next = null

    return p
};
