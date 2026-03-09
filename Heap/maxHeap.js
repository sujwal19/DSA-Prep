class maxHeap {
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
      let largest = index;

      if (left < size && this.heap[left] < this.heap[largest]) {
        largest = left;
      }

      if (right < size && this.heap[right] < this.heap[largest]) {
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
}

const mh = new maxHeap();

mh.insert(50);
mh.insert(55);
mh.insert(53);
mh.insert(52);
mh.insert(54);
console.log("Initial Heap:");
mh.print();

console.log("Deleted:", mh.delete());
console.log("After Deletion: ");

mh.print();
// console.log(mh.peek());
