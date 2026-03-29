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
  let index = 0;
  let current = head;

  while (current !== null) {
    if (index === pos) return current.val;
    current = current.next;
    index++;
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

// UPDATE
// Update Node by Index
function updateAt(head, index, value) {
  let current = head;
  let count = 0;

  while (current) {
    if (count === index) {
      current.val = value;
    }
    current = current.next;
    count++;
  }
  return head;
}

let updatedAt = updateAt(recHead, 2, 17);
// console.log(JSON.stringify(updatedAt, null, 2));

// Update Node by Value (First Occurrence)
function updateValue(head, oldValue, newValue) {
  let current = head;

  while (current) {
    if (current.val === oldValue) {
      current.val = newValue;
      return true;
    }
    current = current.next;
  }
  return false;
}

// let updatedValue = updateValue(recHead, 17, 82);
// console.log(JSON.stringify(updatedValue, null, 2));

// Update All Occurrences of a Value
function updateAll(head, oldValue, newValue) {
  let current = head;
  let count = 0;

  while (current) {
    if (current.val === oldValue) {
      current.val = newValue;
      count++;
    }
    current = current.next;
  }
  return count;
}

let updatedAll = updateAll(recHead, 82, 2);
// console.log(JSON.stringify(updatedAll, null, 2));

// DELETE
// DELETE from Beginning
function deleteFromBeginning(head) {
  if (!head) return null;
  return head.next;
}

let delArr = [2, 4, 6, 8, 11, 15, 11, 11, 11, 23];
let delHead = createLinkedList(delArr);

delHead = deleteFromBeginning(delHead);
// console.log(JSON.stringify(delHead, null, 2));

//
function deleteFromEnd(head) {
  if (!head) return null;
  if (!head.next) return null;

  let current = head;
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
  return head;
}

delHead = deleteFromEnd(delHead);
// console.log(JSON.stringify(delHead, null, 2));

// DELETE by Index
function deleteAtIndex(head, index) {
  if (!head) return null;
  if (index === 0) return head.next;

  let current = head;
  let i = 0;
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

delHead = deleteByValue(delHead, 11);
// console.log(JSON.stringify(delHead, null, 2));

//
function deleteAllByValue(head, value) {
  while (head && head.val === value) {
    return head.next;
  }

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
