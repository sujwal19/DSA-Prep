let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of
for (let val of arr) console.log(val);

// forEach
arr.forEach((val) => console.log(val));
