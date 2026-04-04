class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//
function insert(root, value) {
  if (root === null) return new Node(value);

  if (value < root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }
  return root;
}

function createBST(arr) {
  let root = null;
  for (let value of arr) {
    root = insert(root, value);
  }
  return root;
}

let arr = [1, 3, 9, 7, 4, 2, 12, 45];
let root = createBST(arr);
// console.log(JSON.stringify(root, null, 2));
//

// Create Balanced BST (Best Method 🔥)
function sortedArrayToBST(arr, start = 0, end = arr.length - 1) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  let root = new Node(arr[mid]);

  root.left = sortedArrayToBST(arr, start, mid - 1);
  root.right = sortedArrayToBST(arr, mid + 1, end);

  return root;
}

let balancedRoot = sortedArrayToBST(arr);
console.log(JSON.stringify(balancedRoot, null, 2));

function search(root, value) {
  if (root === null) return false;

  if (value === root.value) return true;

  if (value < root.value) {
    return search(root.left, value);
  } else {
    return search(root.right, value);
  }
}

//
function inorder(root) {
  if (root) {
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
  }
}

function preorder(root) {
  if (root) {
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
  }
}

function postorder(root) {
  if (root) {
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
  }
}

// root = deleteNode(root, oldValue);
// root = insert(root, newValue);

//
