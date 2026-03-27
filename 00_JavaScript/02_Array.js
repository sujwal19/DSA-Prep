// Using array literal (most common)
// let numbers2 = [1, 2, 3];

// Using Array constructor (less common)
// let numbers3 = new Array(1, 2, 3, 4, 5);

let numbers = [1, 2, 3, 4];
let numbers2 = [1, 2, 3];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers2.length; j++) {
//     console.log(numbers[i], "+", numbers2[j]);
//   }
// }

// for (const num of numbers) {
//   for (const num2 of numbers2) {
//     console.log(num, "+", num2);
//   }
// }

let arra = [1, 2, 3];
arra.push(4);
arra.pop();
arra.shift();
arra.unshift(-1);
// console.log(arra);
// console.log("Array Length:", arra.length);
// console.log("What is index of " + "3:", arra.indexOf(3));
// console.log("Does array have " + "1:", arra.includes(1));

//

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log("Original arr -> ", arr);

// slice -> doesn't mutate, // start, end - 1
let part = arr.slice(0, 4); // ans = [0, 1, 2, 3]
// console.log("Sliced array: ", part);

// ---------- splice -> mutate, // start, end - 1
// arr.splice(1, 5);
// console.log(arr);

//------ splice can also add remove any item at any position,
// ----- splice(position, keep(0) or remove(1) elem, what to insert)
// arr.splice(2, 0, "a");
// console.log("Spliced arr: ", arr);

//
arr.splice(1, 1);
// console.log("1 deleted from array: ", arr);

// let newArr = part.concat([4, 5, 6, 7]);
// console.log(newArr);

let arrToStr = part.join("-");
// console.log(arrToStr);

// arr.reverse();
// console.log(arr);

// part.forEach((n) => console.log(n));

let nestedArr = [[1, 2], [3, 4], [5]];
let flattenArr = nestedArr.flat();
// console.log(flattenArr);

// console.log(arr);
// arr.forEach((x) => console.log(x));

let mappedArr = arr.map((x) => x * 2);
// console.log(mappedArr);
let filteredArr = mappedArr.filter((x) => x > 5);
// console.log(filteredArr);

let arrSum = arr.reduce((a, b) => a + b, 0);
// console.log(arrSum);

// console.log(mappedArr.includes(8)); // boolean

let indexedOff = mappedArr.indexOf(8); // index
// console.log(indexedOff);

let findArr = mappedArr.find((x) => x < 6); //  first element greater or equal to
// console.log(findArr);

let aara = [0, 1, 2, 3, 4, 5];

aara.splice(1, 2); // delete
// console.log("splice", aara);

// aara.slice(1, 3); // copy
// console.log("slice", aara);

aara.reverse();
// console.log("reverse", aara);

aara.sort((a, b) => a - b);
// console.log(aara);

let nums = [0, 1, 2, 4, 5, 6, 7];

for (let i = 0; i < nums.length; i++) {
  //   console.log(nums[i]);
}
console.log("....");
for (let i = nums.length - 1; i >= 0; i--) {
  //   console.log(nums[i]);
}

//

function insertAt(arr, index, value) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

// console.log(insertAt(nums, 2, 3));

function get(arr, index) {
  if (index < 0 || index >= arr.length) return null;
  return arr[index];
}
// console.log(get(nums, 3));

for (let i = 0; i < nums.length; i++) {
  nums[i] *= 2;
}
// console.log(nums);

function updateIfGreater(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      arr[i] = value;
    }
  }
  return arr;
}
// console.log(update IfGreater(nums, 11));

function deleteAt(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}
// console.log(deleteAt(nums, 2));

// Search

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
// console.log(search(nums, 10));

// flattenArr = [1, 2, 3, 4, 5]
let newArr = [...flattenArr, 6];
// console.log(newArr);

let updated = newArr.map((x) => (x === 2 ? 99 : x));
// console.log(updated);

let filtered = newArr.filter((x) => x % 2 !== 0);
// console.log(filtered);

//
let strToArr = Array.from("hello");
// console.log(strToArr);

let numToArr = Array.from({ length: 5 }, (_, i) => i);
console.log(numToArr);

let newArrDef = Array.of(5, 6);
// console.log(newArrDef);

let filledArr = Array(5).fill(9, 1, 4); /// (num, start, end)
// console.log(filledArr);

// mutate
let oarr = new Array(3).fill({});
oarr[0].x = 10; // mutate all items
// console.log(oarr);

// doesn't mutate all items
let obArr = Array.from({ length: 5 }, () => ({}));
obArr[0].x = 10;
// console.log(obArr);

let arraa = [1, 2];
arraa.length = 5;

// console.log(arraa);

// console.log(typeof []);
// console.log(Array.isArray(numToArr));

//
let [g, h] = [12, 24];
// console.log(g, h);

let [a, ...c] = [10, 15, 17];
// console.log(a, c);

let newarr = new Array(10).fill(1).map((x) => x);
// console.log(newarr);

const arr2 = [1, 2, 3, 4];

// console.log(arr2.splice(1, 2));
// console.log(arr2);

console.log("hello".replace("h", "y")); // yello

// console.log("hello".includes("ll")); // true

// console.log("hello".startsWith("he")); // true
// console.log("hello".endsWith("lo")); // true
