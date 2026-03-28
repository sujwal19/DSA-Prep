class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// CREATE
// Manually Create
let first = new ListNode(2);
let second = new ListNode(3);
let third = new ListNode(4);
let fourth = new ListNode(5);

first.next = second;
second.next = third;
third.next = fourth;
let head = first;
// console.log(JSON.stringify(head, null, 2));

//

// Create from array
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

let arr = [1, 3, 5, 6];
let arrHead = createLinkedList(arr);
// console.log(JSON.stringify(arrHead, null, 2));

//

// Create from Recursion
function createLinkedListRec(arr, index = 0) {
  if (index >= arr.length) return null;

  let node = new ListNode(arr[index]);
  node.next = createLinkedListRec(arr, index + 1);
  return node;
}

let recc = [2, 3, 4, 5];
let recHead = createLinkedListRec(recc);
// console.log(JSON.stringify(recHead, null, 2));

//

// Insert ar Beginning
function insertAtBeginning(head, val) {
  let newNode = new ListNode(val);
  newNode.next = head;
  return newNode;
}

arrHead = insertAtBeginning(arrHead, -1);
// console.log(JSON.stringify(arrHead, null , 2));

//

// Insert at End
function insertAtEnd(head, val) {
  let newNode = new ListNode(val);
  if (!head) return newNode;

  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

arrHead = insertAtEnd(arrHead, 9);
// console.log(JSON.stringify(arrHead, null, 2));

// READ
// 1. Traversal
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + " ");
    current = current.next;
  }
}
// printLinkedList(recHead);
// console.log("");

// 1. Access By Position
function getNodeAt(head, pos) {
  let count = 0;
  let current = head;

  while (current !== null) {
    if (count === pos) return current.val;
    current = current.next;
    count++;
  }
  return null;
}
// console.log(getNodeAt(recHead, 2));

// 3. Search by Value
function findNode(head, value) {
  let current = head;

  while (current !== null) {
    if (current.val === value) return current;
    current = current.next;
  }
  return null;
}
// console.log(findNode(recHead, 3));

function printRecursively(node) {
  if (!node) return;
  process.stdout.write(node.val + " ");
  printRecursively(node.next);
}

printRecursively(recHead);
console.log("");
