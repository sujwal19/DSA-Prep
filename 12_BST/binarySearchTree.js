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
let arr = [2, 2, 2];
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

function getMinNode(root) {
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
    if (root.left === null) return root.right;
    else if (root.right === null) return root.left;

    const successor = getMinNode(root.right);
    root.val = successor.val;
    root.right = deleteTreeNode(root.right, successor.val);
  }
  return root;
}

// inorderTraversalBST(deleteTreeNode(root, 3));

//

var insertIntoBST = function (root, key) {
  if (root === null) return new TreeNode(key);

  if (key < root.val) {
    root.left = insertIntoBST(root.left, key);
  } else {
    root.right = insertIntoBST(root.right, key);
  }
  return root;
};

// console.log(insertIntoBST(root, 9));
// inorderTraversalBST(root);

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

//

function isBST(root, min, max) {
  if (root === null) return true;

  if (root.val > min && root.val < max) {
    let left = isBST(root.left, min, root.val);
    let right = isBST(root.right, root.val, max);
    return left && right;
  } else return false;
}
var isValidBST = function (root) {
  return isBST(root, -Infinity, Infinity);
};
console.log(isValidBST(root));

//
var isValidBSTArrayLoop = function (root) {
  let result = [];
  function inorderTrav(node) {
    if (node === null) return;
    inorderTrav(node.left);
    result.push(node.val);
    inorderTrav(node.right);
  }
  inorderTrav(root);
  for (let i = 0; i < result.length; i++) {
    if (result[i] <= result[i - 1]) return false;
  }
  return true;
};

// console.log(isValidBSTArrayLoop(root));
