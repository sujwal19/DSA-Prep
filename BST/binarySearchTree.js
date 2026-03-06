class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
//
function insertBST(root, val) {
  if (root === null) return new TreeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}
//
let arr = [3, 1, 4, null, 2];
let root = null;

for (let v of arr) {
  if (v !== null) {
    root = insertBST(root, v);
  }
}

//

function inorderTraversalBST(root) {
  if (root === null) return;

  inorderTraversalBST(root.left);
  process.stdout.write(root.val + " ");
  inorderTraversalBST(root.right);
}
// inorderTraversalBST(root);

//

function getInorderSuccessor(root) {
  while (root !== null && root.left !== null) {
    root = root.left;
  }
  return root;
}

function deleteTreeNode(root, key) {
  if (root === null) return null;

  if (key < root.val) {
    root.left = deleteTreeNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteTreeNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }
    let is = getInorderSuccessor(root.right);
    root.val = is.val;
    root.right = deleteTreeNode(root.right, is.val);
  }
  return root;
}

// inorderTraversalBST(deleteTreeNode(root, 3));

//

var insertIntoBST = function (root, key) {
  if (root === null) return new TreeNode(key);
  //

  function bst(node, key) {
    if (node === null) return new TreeNode(key);

    if (key < node.val) {
      return (node.left = bst(node.left, key));
    } else if (key > node.val) {
      return (node.right = bst(node.right, key));
    }
    return node;
  }
  bst(root, key);
  return root;
};

// console.log(insertIntoBST(root, 5));

let nums = [-10, -3, 0, 5, 9];
var sortedArrayToBST = function (nums) {
  function helper(nums, st, end) {
    if (st > end) return null;

    let mid = Math.floor(st + (end - st) / 2);
    let root = new TreeNode(nums);
    root.left = helper(nums, st, mid - 1);
    root.right = helper(nums, mid + 1, end);
    return root;
  }
  return helper(nums, 0, nums.length - 1);
};

// console.log(sortedArrayToBST(nums));
