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
var swapPairs = function(head) {
  // 递归
  if (head === null || head.next === null) {
    return head
  }

  let firstNode = head
  let secondNode = head.next

  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  return secondNode

  // 迭代
  let dummy = new ListNode(-1)
  dummy.next = head
  
  let prevNode = dummy

  while (head !== null && head.next !== null) {
    let firstNode = head
    let secondNode = head.next

    // 节点交换
    prevNode.next = secondNode
    firstNodeNode.next = secondNode.next
    secondNode.next = firstNode

    head = firstNode.next
    prevNode = firstNode
  }
  
  return dummy.next
};