// 递归

let nex = null

var reverseBetween = function(head, m, n) {
    if (m === 1) {
        return reverseBeforeN(head, n)
    }

    head.next  = reverseBetween(head.next, m - 1, n - 1)
    return head
};

// 反转 n 之前的链表
var reverseBeforeN = function (head, n) {
    if (n === 1) {
        nex = head.next
        return head
    }
    
    const last = reverseBeforeN(head.next, n - 1)
    head.next.next = head
    head.next = nex
    return last
}
// 头插法
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0)
    dummy.next = head

    let pre = dummy

    for (let i = 0; i < m - 1; i++) {
        pre = pre.next
    }

    let start = pre.next
    let then = start.next

    for (let i = 0; i < n - m; i++) {
        start.next = then.next
        then.next = pre.next
        prev.next = then
        then = start.next
    }

    return dummy.next
}