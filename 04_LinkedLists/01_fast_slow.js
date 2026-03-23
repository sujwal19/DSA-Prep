class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create Linked List Manually
const first = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(3);
const fifth = new ListNode(4);
const sixth = new ListNode(4);
const seventh = new ListNode(5);
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;
const head = first;

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// const head = createLinkedList([1, 2, 3, 4, 5]);
// console.log(JSON.stringify(head, null, 1));

function printList(head) {
  let curr = head;
  let output = "";
  while (curr) {
    output += curr.val + " -> ";
    curr = curr.next;
  }
  output += null;
  console.log(output);
}
// printList(head);
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> null

//

// 82. Remove Duplicates from Sorted List II

var deleteDuplicates = function (head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let prev = dummyNode;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      let dupVal = curr.val;

      while (curr && curr.val === dupVal) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummyNode.next;
};

let deleteDuplicateskListII = deleteDuplicates(head);
console.log(deleteDuplicateskListII);
