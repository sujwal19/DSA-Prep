let str = "sujawal";

let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") count++;
}
// console.log(count);
///////////////////////////

let freq = {};
for (let ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq);
//

let anser = "";

for (let ch of str) {
  anser += ch.toUpperCase();
}
// console.log(anser);
//

// let result = "";
// for (let ch of str) {
//   if (ch !== "a") result += ch;
// }
// console.log(result);
//

// let arr = str.split("");
// let left = 0,
//   right = arr.length - 1;

// while (left < right) {
//   [arr[left], arr[right]] = [arr[right], arr[left]];
//   left++;
//   right--;
// }

// let reversed = arr.join("");
// console.log(reversed);
//

let set = new Set();
let left = 0,
  maxLen = 0;

for (let right = 0; right < str.length; right++) {
  while (set.has(str[right])) {
    set.delete(str[left]);
    left++;
  }

  set.add(str[right]);
  maxLen = Math.max(maxLen, right - left + 1);
}

// if (ch >= "a" && ch <= "z"); // lowercase
// if (ch >= "A" && ch <= "Z"); // uppercase
// if (ch >= "0" && ch <= "9"); // digit
//

let code = "b".charCodeAt(0); // 98
let ch = String.fromCharCode(98); // 'b'
console.log(code, ch);

//
str = "H" + str.slice(1);
console.log(str);
