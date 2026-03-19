function maxHeapSort() {
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

  let arr = [4, 10, 3, 5, 1];

  function heapSort(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }

  console.log(heapSort(arr));
}

// maxHeapSort();

//

function minHeapSort() {
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

  let arr = [4, 10, 3, 5, 1];

  function heapSort(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }

  console.log(heapSort(arr));
}

minHeapSort();
