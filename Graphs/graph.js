// Graph Representation

// 1. Adjacency List

// Using Object:
// const graph = {
//   0: [1, 4],
//   1: [0, 2, 3],
//   2: [1, 3],
//   3: [1, 2, 4],
//   4: [0, 3],
// };
// console.log(graph);

// Using Map:
const graph = new Map();
graph.set(0, [1, 4]);
graph.set(1, [0, 2, 3]);
graph.set(2, [1, 3]);
graph.set(3, [1, 2, 4]);
graph.set(4, [0, 3]);

// Add node
graph.set(5, []);

// Add edge, 1 -> 5
graph.get(1).push(5);

// Remove edge, 2 -> 3
graph.set(
  2,
  graph.get(2).filter((n) => n !== 3),
);

graph.delete(2);
for (let [node, neighbors] of graph) {
  graph.set(
    node,
    neighbors.filter((n) => n !== 2),
  );
}

console.log(graph);

//

//  Adjacency Matrix
const nodes = ["A", "B", "C", "D"];

const matrix = [
  [0, 1, 1, 0], // A -> B, C
  [1, 0, 0, 1], // B -> A, D
  [1, 0, 0, 1], // C -> A, D
  [0, 1, 1, 0], // D -> B, C
];
console.log(matrix);

function hasEdge(matrix, i, j) {
  return matrix[i][j] === 1;
}
console.log(hasEdge(matrix, 0, 2)); // true
