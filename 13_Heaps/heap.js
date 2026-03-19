class maxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  compare(a, b) {
    if (a.dist !== b.dist) {
      return a.dist > b.dist;
    }
    return a.val > b.val;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIdx = this.getParentIndex(index);
      // Max-Heap logic: child > parent
      if (this.heap[index] > this.heap[parentIdx]) {
        [this.heap[index], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[index],
        ];
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  delete() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const size = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let largest = index;

      if (left < size && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < size && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

class minHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIdx = this.getParentIndex(index);
      // Min-Heap logic: child < parent
      if (this.heap[index] < this.heap[parentIdx]) {
        [this.heap[index], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[index],
        ];
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  print() {
    for (let i = 0; i < this.heap.length; i++) {
      process.stdout.write(this.heap[i] + " ");
      // console.log(this.heap.join(" "));
    }
    console.log("");
  }

  delete() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const size = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < size && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < size && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

let arr = [7, 10, 4, 20, 15];
let k = 4;

var findKthSmallest = function (nums, k) {
  let heap = new maxHeap();

  for (let i = 0; i < k; i++) {
    heap.insert(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] < heap.peek()) {
      heap.delete();
      heap.insert(nums[i]);
    }
  }

  let ans = heap.peek();
  return ans;
};

// console.log(findKthSmallest(arr, k));

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

function isMaxOrder(root) {
  if (root === null) return true;

  if (root.left !== null && root.left.val > root.val) {
    return false;
  }

  if (root.right !== null && root.right.val > root.val) {
    return false;
  }

  return isMaxOrder(root.left) && isMaxOrder(root.right);
}

function checkHeap(root) {
  if (root === null) return true;

  let totalCount = countNodes(root);
  let cbtCheck = isCBT(root, 0, totalCount);
  let orderCheck = isMaxOrder(root);

  return cbtCheck && orderCheck;
}

const root = {
  val: 10,
  left: {
    val: 8,
    left: { val: 5, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
};
// console.log(checkHeap(root)); // Should output: true

// Sort a nearly Sorted Array

var nearlySortedArray = function (arr, k) {
  let heap = new minHeap();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);

    if (heap.heap.length > k) {
      result.push(heap.delete());
    }
  }

  while (heap.heap.length > 0) {
    result.push(heap.delete());
  }

  return result;
};
// console.log(nearlySortedArray([6, 5, 3, 2, 8, 10, 9], 3));

//
// Kth Closest Number
const findClosestElements = function (arr, k, x) {
  const heap = new maxHeap((a, b) => {
    if (a.dist !== b.dist) return a.dist - b.dist;
    return a.val - b.val;
  });

  for (let num of arr) {
    let dist = Math.abs(num - x);
    heap.insert({ dist, val: num });

    if (heap.size() > k) {
      heap.delete();
    }
  }

  return heap.heap.map((item) => item.val).sort((a, b) => a - b);
};

console.log(findClosestElements([5, 6, 7, 8, 9], 3, 7));
