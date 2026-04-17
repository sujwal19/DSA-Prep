class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new ListNode(6);
let second = new ListNode(8);
let third = new ListNode(12);
let fourth = new ListNode(15);
let fifth = new ListNode(19);
let sixth = new ListNode(21);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
let head = first;
//

function traverse(node) {
  if (node === null) return;

  console.log(node.val);
  traverse(node.next);
}
traverse(head);
//
console.log(".........");

let slow = head;
let fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}

console.log(slow.val); // middle
