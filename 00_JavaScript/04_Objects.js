const user = {
  name: "Ram",
  age: 20,
};

// console.log(user.name); // Dot notation
// console.log(user["age"]); // Bracket notation

// const key = "name";
// console.log(user[key]); // "Ram"

// user.city = "KTM";
// console.log(user);

// delete user.city;
// console.log(user);

for (const key in user) {
  console.log(key, user[key]);
}
console.log("...");
// console.log(Object.keys(user)); // ["name", "age"]

// console.log(Object.values(user)); // [ 'Ram', 20 ]

// console.log(Object.entries(user));
// ans => [ [ 'name', 'Ram' ], [ 'age', 20 ] ]

// const student = {
//   name: "Hari",
//   marks: {
//     math: 90,
//     science: 85,
//   },
// };
// console.log(student["marks"]["math"]); // 90
// console.log(student["marks"].math); // 90
// console.log(student.marks["math"]); // 90
// console.log(student.marks.math); // 90

const users = [
  { name: "Ram", age: 20 },
  { name: "Sita", age: 22 },
];

// console.log(users[0].name); // Ram

// console.log(users[0]);

// for (const key in users[0]) {
//   console.log(key, users[0][key]);
// }

// const name = "Ram";
// const age = 10;
// const usered = { name, age }; // same as { name: name }
// console.log(usered);

function createUser(name, age) {
  return { name, age };
}

const anish = createUser("Anish", 12);

// const { name, age } = anish;
// console.log(name, age);

const oneUser = { name: "Luci" };
const { name, age = 18 } = oneUser;
// console.log(age);

//

// const person = { name: "Aplha" };
// const { name: userName } = person;
// console.log(userName); // Alpha

//

const student = {
  name: "Ram",
  address: {
    city: "Kathmandu",
    zip: 44600,
  },
};

function greet({ name }) {
  console.log(name);
}
greet(student); // Guest

function greet2({ fname = "Guest" }) {
  console.log(fname);
}
greet2(student); // Guest

const todo = { task: "Drink Water", id: 1, filter: "easy" };

const updatedTodo = { ...todo, id: 2, filter: "medium" };
// console.log(updatedTodo);

const { task, ...rest } = todo;

// console.log(rest);

const product = {
  id: 1,
  name: "Phone",
  price: 500,
};

// console.log(product.name);
// console.log(product.price);

product.stock = 0;

let product2 = { ...product, price: 200 };

// console.log(product2);
// console.log(product);

const { name: productName, category = "Electronic" } = product;
// console.log(productName);

const item = {
  name: "Phone",
  details: {
    color: "black",
  },
};

const copy = { ...item };

copy.details.color = "white";
// console.log(copy);
// console.log(item.details.color); // "white" ❌

const deepCopy = JSON.parse(JSON.stringify(product));
// console.log(deepCopy);

const singleTodo = {
  id: 1,
  data: {
    title: "Learn JS",
    completed: false,
  },
};

// console.log(singleTodo);
// console.log(singleTodo.data.title); // "Learn JS"
// console.log(singleTodo.data.completed); // false

//

// console.log(singleTodo.data?.title); // "Learn JS"
// console.log(singleTodo.info?.title); // undefined (does not throw error)

const upgradedTodo = {
  ...singleTodo,
  data: {
    ...singleTodo.data,
    completed: true,
  },
};

// console.log(upgradedTodo);
// { id: 1, data: { title: "Learn JS", completed: true } }
