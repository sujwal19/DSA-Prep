class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Create a Tree Manually
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

function insertLevelOrder(arr, root, i) {
  if (i < arr.length) {
    let temp = new TreeNode(arr[i]);
    root = temp;

    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root;
}

// Example:
let arr = [1, 2, 3, 4, 5, 6, 7];
let root2 = insertLevelOrder(arr, null, 0);

// console.log(JSON.stringify(root2, null, 2));

function preorder(root) {
  if (root === null) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}
// preorder(root2);

function inorder(root) {
  if (root === null) return;
  preorder(root.left);
  console.log(root.val);
  preorder(root.right);
}
// inorder(root2);

function postorder(root) {
  if (root === null) return;
  preorder(root.left);
  preorder(root.right);
  console.log(root.val);
}
// postorder(root2);

//

// let arr = [1, 2, 3, 4, 5, 6, 7];

function preorder_iter(root) {
  if (!root) return;
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
preorder_iter(root2);
// # Hack: Push right first, then left → stack gives correct preorder.

//

function inorder_iter(root) {
  if (!root) return;
  const stack = [];
  let node = root;

  while (stack.length > 0 || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    console.log(node.val);
    node = node.right;
  }
}
inorder_iter(root2);
// # Hack: Push right first, then left → stack gives correct preorder.

//
