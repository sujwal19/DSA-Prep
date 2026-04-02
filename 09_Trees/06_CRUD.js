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
console.log(rootRecursive);
