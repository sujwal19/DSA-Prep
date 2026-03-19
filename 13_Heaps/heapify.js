// Max Heap
function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

console.log("Heapify: ");
let arr = [4, 10, 3, 5, 1];
let n = 5;

for (let i = Math.floor(n / 2) - 1; i > -1; i--) {
  heapify(arr, n, i);
}

for (let i = 0; i < arr.length; i++) {
  process.stdout.write(arr[i] + " ");
}
console.log("");

//

// MinHeap
function MinHeap() {
  function heapify(arr, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      heapify(arr, n, smallest);
    }
  }

  console.log("Heapify: ");
  let arr = [54, 53, 55, 52, 50];
  let n = 5;

  for (let i = Math.floor(n / 2) - 1; i > -1; i--) {
    heapify(arr, n, i);
  }

  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
  }
  console.log("");
}
// MinHeap();

//
