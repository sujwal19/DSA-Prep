let arr = [13, 24, 45, 66];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log("....");
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
// console.log("....");
// for (let val of arr) console.log(val);

// console.log("....");
// arr.forEach((val, i) => console.log(val, i));

// //
// console.log("....");
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// //

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
console.log("....");

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(".....");

let left = 0;
let right = arr.length - 1;

// let arr = [13, 24, 45, 66];
while (left < right) {
  console.log(arr[left], arr[right]);
  left++;
  right--;
}

console.log("....");

let k = 3;
let sum = 0;
// first window
// let arr = [13, 24, 45, 66];
for (let i = 0; i < k; i++) sum += arr[i];

for (let i = k; i < arr.length; i++) {
  sum += arr[i];
  sum -= arr[i - k];
}

console.log(sum);
