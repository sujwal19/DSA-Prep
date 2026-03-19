// -------------------------- Reverse String--------------------------- 3
let username = "ghostrider101";
let tempString = "";

// Method #1
// console.log(username.split("").reverse().join(""));

// Method #2
// for (let i = username.length - 1; i >= 0; i--) {
//   tempString += username[i];
// }

let left = 0;
let right = username.length - 1;
username = username.split("");

while (left <= right) {
  [username[left], username[right]] = [username[right], username[left]];
  left++;
  right--;
}

console.log(username.join(""));
