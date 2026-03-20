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

// 👉 Queue = level order building
// Build Tree from Array (Level Order)
let arr = ["A", "B", "C", "D", "E", null, "F"];

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];

  let i = 1;
  while (i < arr.length) {
    let current = queue.shift();
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
let root = buildTree(arr);

//

const preOrderArray = [1, 2, 4, null, null, 5, null, null, 3];

// let i = 0;
// function buildTree(arr) {
//   if (i >= arr.length || arr[i] === null) {
//     i++;
//     return null;
//   }
//   const node = new TreeNode(arr[i++]);
//   node.left = buildTree(arr);
//   node.right = buildTree(arr);

//   return node;
// }

// //

// function buildTree(preorder, inorder) {
//   if (!preorder.length || !inorder.length) return null;
//   const rootVal = preorder[0];
//   const root = new TreeNode(rootVal);
//   const mid = inorder.indexOf(rootVal);
//   root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//   root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
//   return root;
// }

function insertBinaryTree(root, val) {
  if (!root) return new TreeNode(val);

  let queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (!current.left) {
      current.left = new TreeNode(val);
      return root;
    } else {
      queue.push(current.left);
    }

    if (!current.right) {
      current.right = new TreeNode(val);
      return root;
    } else {
      queue.push(current.right);
    }
  }
}
console.log(insertBinaryTree(root, "G"));

// Delete a Node
function deleteNode(root, key) {
  if (!root) return null;

  if (!root.left && !root.right) {
    return root.val === key ? null : root;
  }

  const queue = [root];
  let nodeToDelete = null;
  let lastNode = null;

  while (queue.length) {
    lastNode = queue.shift();

    if (lastNode.val === key) nodeToDelete = lastNode;

    if (lastNode.left) queue.push(lastNode.left);
    if (lastNode.right) queue.push(lastNode.right);
  }

  if (nodeToDelete) {
    nodeToDelete.val = lastNode.val;

    const removeQueue = [root];
    while (removeQueue.length) {
      const temp = removeQueue.shift();
      if (temp.left) {
        if (temp.left === lastNode) {
          temp.left = null;
          break;
        } else removeQueue.push(temp.left);
      }

      if (temp.right) {
        if (temp.right === lastNode) {
          temp.right = null;
          break;
        } else removeQueue.push(temp.right);
      }
    }
  }
  return root;
}
