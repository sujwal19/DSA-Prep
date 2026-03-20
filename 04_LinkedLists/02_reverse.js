class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper: Convert array → linked lis
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let v of arr) {
    curr.next = new ListNode(v);
    curr = curr.next;
  }
  return dummy.next;
}

console.log(arrayToList([1, 4, 5, 2, 4, 5]));

// Helper: Print linked list
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}
