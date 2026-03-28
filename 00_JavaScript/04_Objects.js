const obj = {
  name: "Ram",
  skills: ["JS", "React"],
  address: { city: "Kathmandu" },
  greet() {
    return "Hi";
  },
};
// console.log(obj.greet());

const a = { x: 1 };
const b = a;

b.x = 10;
// console.log(a.x); // due to memory reference

//
// const obj = {};

// const obj = new Object();

function Userr(name) {
  this.name = name;
  this.age = 20;
}
const u1 = new Userr("Sujwal");
u1.age = 18;

//

class User {
  constructor(name) {
    this.name = name;
    this.age = null;
  }
}

const u2 = new User("Sujwal");
u2.age = 22;

// console.log(u1);
// console.log(u2);

//

// const key = "age";
// user[key]; // dynamic

// const obje = { "full name": "Sujwal" };
// obje["full name"]; // spaces

//

const person = { name: "Sujwal", age: 22 };

// console.log(Object.keys(person)); // ["name", "age"]

// console.log(Object.values(person)); // ["Sujwal", 22]

let mapped = Object.entries(person).map(([key, val]) => {
  console.log(key, val);
});

console.log(".....");
for (const key in person) {
  console.log(key, person[key]);
}

console.log(".....");
// Object.entries(person).forEach(([key, val]) => {
//   console.log(key, val);
// });

const user = {
  name: "Eren",
  age: 19,
  address: {
    city: "Kathmandu",
    zip: 44600,
  },
};
// console.log(user?.address?.town);

//

const { name: UserName, weight = "70kg", ...rest } = user;
// console.log(UserName, weight);
// console.log(rest);
//

const deep = JSON.parse(JSON.stringify(user));
// console.log(deep);

// console.log(Object.assign({}, user, person));

// Object.freeze(user);  // cannot modify
// user.age = 24;

// Object.seal(user); // can update, cannot add/delete
// delete user.age;
// console.log(user);

// console.log(user.hasOwnProperty("weight"));

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];

let finder = users.find((u) => u.name === "A");
// console.log(finder);

// let mapper = users.map((u) => (u.name === "A" ? { ...u, age: 30 } : u));
// console.log(mapper);

let filtered = users.filter((u) => u.name !== "A");
// console.log(filtered);

const arr = ["a", "b", "a"];
const freq = arr.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
// console.log(freq);

//

const people = [
  { name: "A", city: "KTM" },
  { name: "B", city: "PKR" },
  { name: "C", city: "KTM" },
];

const grouped = people.reduce((acc, p) => {
  acc[p.city] = acc[p.city] || [];
  acc[p.city].push(p);
  return acc;
}, {});

console.log(grouped);
