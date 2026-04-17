class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Create a Tree Manually
// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);
// console.log(root);

//

function arrayToTreeRecursive(arr, i = 0) {
  if (i >= arr.length) return null;

  const node = new TreeNode(arr[i]);
  node.left = arrayToTreeRecursive(arr, 2 * i + 1);
  node.right = arrayToTreeRecursive(arr, 2 * i + 2);
  return node;
}

// Example
const arr = [1, 2, 3, 4, 5, 6, 7];
const rootRecursive = arrayToTreeRecursive(arr);
// console.log(JSON.stringify(rootRecursive, null, 2));

//

// READ
function find(root, value) {
  if (!root) return false;
  if (root.value === value) return true;
  return find(root.left, value) || find(root.right, value);
}
// console.log(find(rootRecursive, 6));

//

// UPDATE
function update(root, oldValue, newValue) {
  if (!root) return;
  if (root.value === oldValue) {
    root.value = newValue;
  }
  update(root.left, oldValue, newValue);
  update(root.right, oldValue, newValue);
}
update(rootRecursive, 4, 44);
// console.log(rootRecursive);

//

function deleteNode(root, value) {
  if (!root) return null;

  if (root.left && root.left.value === value) {
    root.left = null;
    return;
  }
  if (root.right && root.right.value === value) {
    root.right = null;
    return;
  }
  deleteNode(root.left, value);
  deleteNode(root.right, value);
}

//

function insert(root, value) {
  const newNode = new TreeNode(value);

  if (!root) return newNode;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current.left) {
      current.left = newNode;
      return root;
    } else {
      queue.push(current.left);
    }

    if (!current.right) {
      current.right = newNode;
      return root;
    } else {
      queue.push(current.right);
    }
  }
}

insert(rootRecursive, 81);
// console.log(JSON.stringify(rootRecursive, null, 2));

//

function update(root, oldValue, newValue) {
  if (!root) return;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.value === oldValue) {
      current.value = newValue;
      return;
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

function levelOrder(root) {
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

levelOrder(rootRecursive);
//

function preorder(root) {
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function inorder(root) {
  let stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
  }
}

function count(root) {
  if (!root) return 0;

  return 1 + count(root.left) + count(root.right);
}

function count(root) {
  if (!root) return 0;

  return 1 + count(root.left) + count(root.right);
}

function sum(root) {
  if (!root) return 0;

  return root.val + sum(root.left) + sum(root.right);
}
