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
  const head = new ListNode(arr[0]);
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
function createLinkedListRec(arr, index = arr.length - 1) {
  if (index < 0) return null;

  let nextNode = createLinkedListRec(arr, index - 1);

  if (arr[index] % 2 === 0) {
    return nextNode;
  }
  let node = new ListNode(arr[index]);
  node.next = nextNode;
  return node;
}

let recc = [1, 2, 3, 4, 5];
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
// console.log(JSON.stringify(arrHead, null, 2));

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
arrHead = insertAtEnd(arrHead, 82);
// console.log(JSON.stringify(arrHead, null, 2));

// READ
// 1. Traversal
function printLinkedList(head) {
  if (!head) return null;

  let current = head;

  while (current) {
    process.stdout.write(current.val + " ");
    current = current.next;
  }
}
printLinkedList(arrHead);
console.log("");

function insertAt(head, index, value) {
  let newNode = new ListNode(value);

  if (!head) {
    if (index === 0) return newNode;
    return;
  }

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let i = 0;

  while (current.next && i < index - 1) {
    current = current.next;
    i++;
  }
  newNode.next = current.next;
  current.next = newNode;
  return head;
}

function insertAtUsingDummyNode(head, index, value) {
  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  let current = dummyNode;
  let i = 0;

  while (current && i < index) {
    current = current.next;
    i++;
  }
  if (!current) return head;

  let newNode = new ListNode(value);
  newNode.next = current.next;
  current.next = newNode;

  return dummyNode.next;
}
let insertedAtDummyNode = insertAtUsingDummyNode(arrHead, 3, 4);
// console.log(JSON.stringify(insertedAtDummyNode, null, 2));

// 1. Access By Position
function getNodeAt(head, pos) {
  if (!head) return null;
  let current = head;
  let index = 0;

  while (current) {
    if (pos === index) return current;
    current = current.next;
    index++;
  }
  return current;
}
// console.log(getNodeAt(arrHead, 3));

// 3. Search by Value
function findNode(head, value) {
  if (!head) return null;
  let current = head;

  while (current) {
    if (current.val === value) return current;
    current = current.next;
  }
  return null;
}
// console.log(findNode(recHead, 5));

function printRecursively(node) {
  if (!node) return;
  process.stdout.write(node.val + " ");
  printRecursively(node.next);
}

// printRecursively(arrHead);
// console.log("");

// UPDATE
// Update Node by Index
function updateAt(head, index, value) {
  if (!head) return null;
  let current = head;
  let pos = 0;

  while (current.next && pos < index) {
    current = current.next;
    pos++;
  }
  current.val = value;
  return head;
}

let updatedAt = updateAt(arrHead, 2, 17);
// console.log(JSON.stringify(updatedAt, null, 2));

// Update Node by Value (First Occurrence)
function updateValue(head, oldValue, newValue) {
  let current = head;

  while (current) {
    if (current.val === oldValue) {
      current.val = newValue;
      return;
    }
    current = current.next;
  }
  return head;
}

let updatedValue = updateValue(arrHead, 17, 82);
// console.log(JSON.stringify(updatedValue, null, 2));

// Update All Occurrences of a Value
function updateAll(head, oldValue, newValue) {
  if (!head) return;

  let current = head;
  while (current) {
    if (current.val === oldValue) {
      current.val = newValue;
    }
    current = current.next;
  }
  return head;
}

let updatedAll = updateAll(arrHead, 82, 93);
// console.log(JSON.stringify(updatedAll, null, 2));

// DELETE
// DELETE from Beginning
function deleteFromBeginning(head) {
  if (!head) return null;
  return head.next;
}

let delArr = [2, 4, 6, 8, 11, 15, 11, 77, 11, 23];
let delHead = createLinkedList(delArr);

delHead = deleteFromBeginning(delHead);
// console.log(JSON.stringify(delHead, null, 2));

// printLinkedList(delHead);
// console.log("");

//
function deleteFromEnd(head) {
  if (!head) return null;
  if (!head.next) return null;

  let current = head;
  while (current.next.next) {
    current = current.next;
  }
  if (current.next) {
    current.next = null;
  }
  return head;
}

delHead = deleteFromEnd(delHead);
// console.log(JSON.stringify(delHead, null, 2));

// DELETE by Index
function deleteAtIndex(head, index) {
  if (!head) return null;
  if (index === 0) return head.next;
  let i = 0;
  let current = head;

  while (current.next && i < index - 1) {
    current = current.next;
    i++;
  }
  if (current.next) {
    current.next = current.next.next;
  }
  return head;
}

delHead = deleteAtIndex(delHead, 4);
// console.log(JSON.stringify(delHead, null, 2));

// DELETE by Value (First Occurrence)
function deleteByValue(head, value) {
  if (!head) return null;
  if (head.val === value) return head.next;

  let current = head;
  while (current.next && current.next.val !== value) {
    current = current.next;
  }
  if (current.next) {
    current.next = current.next.next;
  }
  return head;
}

delHead = deleteByValue(delHead, 77);
// console.log(JSON.stringify(delHead, null, 2));

//
function deleteAllByValue(head, value) {
  while (head && head.val === value) head = head.next;

  let current = head;

  while (current && current.next) {
    if (current.next.val === value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

delHead = deleteAllByValue(delHead, 11);
// console.log(JSON.stringify(delHead, null, 2));
