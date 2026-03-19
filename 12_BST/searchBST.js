class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
function insertBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}

let arr = [5, 1, 4, null, null, 3, 6];
let root = null;

for (let v of arr) {
  root = insertBST(root, v);
}

function searchBST(root, val) {
  if (!root) return false;

  if (root.val == val) return true;
  else if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}

function searchBSTItervative(root, val) {
  let current = root;

  while (current) {
    if (current.val === val) return true;
    current = val < current.val ? current.left : current.right;
  }
  return false;
}
// let ans = searchBST(root, 9);
// console.log(ans);

//

function minVal(root) {
  let temp = root;

  while (temp.left !== null) {
    temp = temp.left;
  }
  return temp;
}
// console.log(minVal(root));

//

function maxVal(root) {
  let temp = root;

  while (temp.right !== null) {
    temp = temp.right;
  }
  return temp;
}
// console.log(maxVal(root));

//

var kthSmallest = function (root, k) {
  let result = [];
  function inorderTrav(node) {
    if (node === null) return;
    inorderTrav(node.left);
    result.push(node.val);
    inorderTrav(node.right);
  }
  inorderTrav(root);
  return result[k - 1];
};

// console.log(kthSmallest(root, 1));

//

function inorderSuccessor(root) {
  let ans = null;
  while (root !== null) {
    ans = root;
    root = root.left;
  }
  return ans;
}

function inorderPredecessor(root) {
  let ans = null;
  while (root !== null) {
    ans = root;
    root = root.right;
  }
  return ans;
}

function inorderPredNSucc(root, key) {
  if (!root) return false;
  let current = root;
  let pred = null;
  let succ = null;

  while (current !== null) {
    if (key < current.val) {
      succ = current;
      current = current.left;
    } else if (key > current.val) {
      pred = current;
      current = current.right;
    } else {
      if (current.left !== null) {
        pred = inorderPredecessor(current.left);
      }

      if (current.right !== null) {
        succ = inorderSuccessor(current.right);
      }
      break;
    }
  }

  return [pred.val, succ.val];
}
// console.log(inorderPredNSucc(root, 4));

//

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return null;

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else return root.val;
};
// console.log(lowestCommonAncestor(root, 5, 8));
