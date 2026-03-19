//  Most asked questions in interview
// Invert Binary Tree -s
// Maximum Depth -s
// Validate BST -
// Level Order Traversal -s
// Lowest Common Ancestor
// Diameter of Binary Tree -s
// Serialize & Deserialize
// Kth smallest in BST
// Path Sum
// Balanced Binary Tree

//

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr) {
  let idx = 0;

  function helper() {
    if (idx >= arr.length || arr[idx] === -1) {
      idx++;
      return null;
    }
    const newNode = new TreeNode(arr[idx]);
    idx++;
    newNode.left = helper();
    newNode.right = helper();

    return newNode;
  }
  return helper();
}

const arr = [1, 2, 3, 4, 5, 6];
const root = buildTree(arr);
console.log(JSON.stringify(root, null, 2));

function levelOrderByLevel(root) {
  if (!root) return;
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelNodes.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    console.log(levelNodes.join(" "));
  }
}

// console.log("Levelorder Traversal");
// levelOrderByLevel(root);

//

//  Count Nodes ------------------------------------
// (DFS) recursion
// function countNodes(root) {
//   if (root === null) return 0;
//   let leftNode = countNodes(root.left);
//   let rightNode = countNodes(root.right);

//   return leftNode + rightNode + 1;
// }

// (BFS) queue
// function countNodes(root) {
//   if (!root) return 0;
//   const queue = [root];
//   let count = 0;
//   while (queue.length) {
//     const node = queue.shift();
//     count++;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return count;
// }
// let countOfNodes = countNodes(root);
// console.log(countOfNodes);

//

// Sum of Nodes
// function sumNodes(root) {
//   if (root === null) return 0;
//   let leftSum = sumNodes(root.left);
//   let rightSum = sumNodes(root.right);
//   return leftSum + rightSum + root.value;
// }
// let sumOfNodes = sumNodes(root);
// console.log(sumOfNodes);

//

//
function treeHeight(root) {
  if (root === null) return 0;

  let leftHeigth = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);

  let myHeight = Math.max(leftHeigth, rightHeight) + 1;
  return myHeight;
}

// O(n^2) Approach
function diameter(root) {
  if (!root) return 0;
  let diam1 = diameter(root.left);
  let diam2 = diameter(root.right);
  let diam3 = treeHeight(root.left) + treeHeight(root.right) + 1;
  return Math.max(diam3, Math.max(diam1, diam2));
}

// O(n) Approach
function diameter2(root) {
  let diam = 0;

  function dfs(node) {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    // update diameter
    diam = Math.max(diam, left + right);
    // return height
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return diam;
}

let heightOfTree = treeHeight(root);
// console.log(heightOfTree);

// let diameterOfTree = diameter(root);
// console.log(diameterOfTree);

// let diameterOfTree2 = diameter2(root);
// console.log(diameterOfTree2);

//

function isIdentical(root, subRoot) {
  if (root == null && subRoot == null) return true;
  if (root == null || subRoot == null) return false;

  if (root.value === subRoot.value) {
    return (
      isIdentical(root.left, subRoot.left) &&
      isIdentical(root.right, subRoot.right)
    );
  }
  return false;
}

var isSubtree = function (root, subRoot) {
  if (subRoot === null) return true;
  if (root === null) return false;

  if (isIdentical(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

let subTreeCheck = isSubtree([3, 4, 5, 1, 2], [4, 1, 2]);
// console.log(subTreeCheck);

//
// Preoder Traversal -------------------------------------
// Recursive way.....
function preorderTraversal(node) {
  if (!node) return;
  process.stdout.write(node.value + " ");
  preorderTraversal(node.left);
  preorderTraversal(node.right);
}

// preorderTraversal(root);
// Iterative way.....
function preorderTraversalIterative(root) {
  let preorder = [];
  if (root === null) return [];

  let stack = [];
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    preorder.push(node.value);

    // first right and then left
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return preorder;
}

let result3 = preorderTraversalIterative(root);
// console.log(result3);

//

// Inorder Traversal -------------------------------------
// Recursive way.....
function inorderTraversal(node) {
  if (!node) return;
  inorderTraversal(node.left);
  process.stdout.write(node.value + " ");
  inorderTraversal(node.right);
}

// Iterative way.....
function inorderTraversalIterative(root) {
  if (root === null) return [];
  let stack = [];
  let inorder = [];
  let node = root;

  while (true) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length <= 0) break;
      node = stack.pop();
      inorder.push(node.value);
      node = node.right;
    }
  }
  return inorder;
}

let result4 = inorderTraversalIterative(root);
// console.log(result4);

// Postorder Traversal -------------------------------------
// Recursive way.....
// function postorderTraversal(node) {
//   if (!node) return;
//   postorderTraversal(node.left);
//   postorderTraversal(node.right);
//   process.stdout.write(node.value + " ");
// }
// Iterative way #1 .....
function postorderTraversalIterative(root) {
  let st1 = [];
  let st2 = [];
  let postorder = [];

  if (root === null) return postorder;

  st1.push(root);

  while (st1.length) {
    root = st1.pop();
    st2.push(root);

    if (root.left) st1.push(root.left);
    if (root.right) st1.push(root.right);
  }

  while (st2.length) {
    postorder.push(st2.pop().value);
  }
  return postorder;
}
let result5 = postorderTraversalIterative(root);
// console.log(result5);

// Iterative way #2 .....
function postorderTraversalIterativeII(root) {
  let postorder = [];
  let lastVisited = null;
  let stack = [];
  let node = root;
  if (root === null) return postorder;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      let peekNode = stack[stack.length - 1];
      if (peekNode.right && lastVisited !== peekNode.right) {
        node = peekNode.right;
      } else {
        stack.pop();
        postorder.push(peekNode.value);
        lastVisited = peekNode;
      }
    }
  }
  return postorder;
}
let result51 = postorderTraversalIterativeII(root);
// console.log(result51);
//

// [4,2,7,1,3,6,9]
var invertTree = function (root) {
  if (root === null) return null;
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

var invertTree = function (root) {
  if (root == null) return null;

  let leftInverted = invertTree(root.left);
  let rightInverted = invertTree(root.right);

  root.left = rightInverted;
  root.right = leftInverted;
  return root;
};

// console.log(invertTree(root));

//
//
function preInPostTraversal(root) {
  let st = [];
  st.push({ node: root, num: 1 });

  let pre = [];
  let ino = [];
  let post = [];

  if (root === null) return;

  while (st.length) {
    let it = st.pop();

    // Preorder
    if (it.num === 1) {
      pre.push(it.node.val);
      it.num++;
      st.push(it);

      if (it.node.left !== null) {
        st.push({ node: it.node.left, num: 1 });
      }
    }
    // Inorder
    else if (it.num === 2) {
      ino.push(it.node.val);
      it.num++;
      st.push(it);

      if (it.node.right !== null) {
        st.push({ node: it.node.right, num: 1 });
      }
    }
    // Postorder
    else {
      post.push(it.node.val);
    }
  }
  return { pre, ino, post };
}
// console.log(preInPostTraversal(root));

//
// is Binary Tree Heap

function countNodes(root) {
  if (root === null) return 0;
  let leftNode = countNodes(root.left);
  let rightNode = countNodes(root.right);

  return leftNode + rightNode + 1;
}

function isCBT(root, index, nodeCount) {
  if (root == null) return true;

  if (index >= nodeCount) return false;
  else {
    let left = isCBT(root.left, 2 * index + 1, nodeCount);
    let right = isCBT(root.right, 2 * index + 2, nodeCount);
    return left && right;
  }
}

let index = 0;
let totalCount = countNodes(root);
console.log(isCBT(root, index, totalCount));
