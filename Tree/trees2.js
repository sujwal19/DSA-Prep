// Create a Node Class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// #Manually Build a Tree:
// const root = new TreeNode(1);

// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// root.right.left = new TreeNode(6);

//

// 🧠 Tip #1 (VERY IMPORTANT)
// 👉 A tree is just connected nodes via references
// There’s no “tree object”—just a root node.

//

// Build Tree from Array (Level Order)
let arr = ["A", "B", "C", "D", "E", null, "F"];

function buildTree(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];

  let i = 1;
  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}
// let root = buildTree(arr);

//

// ⚡ Pro Debug Trick:
// console.log(JSON.stringify(root, null, 2));

//

// 🧠 Tip #2 (Core Hack)
// 👉 Queue = level order building

// Whenever:
// You see level-by-level
// Think: queue (BFS)

//

//🔹 Hack 2: 90% problems = recursion

const preOrderArray = [1, 2, 4, null, null, 5, null, null, 3];

let i = 0;
function buildTree(arr) {
  if (i >= arr.length || arr[i] === null) {
    i++;
    return null;
  }

  const node = new TreeNode(arr[i++]);

  node.left = buildTree(arr);
  node.right = buildTree(arr);

  return node;
}

//

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  const mid = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));

  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
}
