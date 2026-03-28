"hello".split("");
// ["h","e","l","l","o"]

"  hi  ".trim(); // "hi"

"hello".includes("ll"); // true
"hello".indexOf("l"); // 2
"hello".startsWith("he"); // true
"hello".endsWith("lo"); // true

"hello".slice(1, 4); // "ell"
"hello".slice(-2); // "lo"

"hello".substring(1, 4); // "ell"

"hello world".replace("world", "JS");
// "hello JS"

let abc = "a b a";

console.log(abc.replaceAll("a", "x"));
// "x b x"

let concatStr = "Hello".concat(" World");
// console.log(concatStr);

// String --> Array
"a,b,c".split(",");
// ["a","b","c"]

// Array --> String
["a", "b", "c"].join("-");
// "a-b-c"

let hello = "hello world".split(" ").join("-");
console.log(hello);
// "hello-world"
