//
let map = new Map();

map.set("name", "Eren");
map.set("name", "Sujwal");
map.set("age", 22);
map.set("role", "SDE");
map.set("contact", 9825952057);
map.delete("contact");

// key and values
// for (let [key, val] of map) {
//   console.log(val);
// }

// Key
for (let key of map.keys()) {
  console.log(key);
}

// Values
for (let val of map.values()) {
  console.log(val);
}
