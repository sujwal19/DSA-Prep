// Graph Representation

// 1. Adjacency List

function usingObjects() {
  // const graph = {
  //   A: ["B", "C"],
  //   B: ["D"],
  //   C: ["D"],
  //   D: [],
  // };
  // console.log(graph);
}
// usingObjects();

//

// If there is weight
function usingObjectsForWeighted() {
  // const graph = {
  //   A: [
  //     { node: "B", weight: 5 },
  //     { node: "C", weight: 2 },
  //   ],
  //   B: [],
  //   C: [],
  // };
  // console.log(graph);
}
// usingObjectsForWeighted();

//
function usingMap() {
  const graph = new Map();

  graph.set("A", ["B", "C"]);
  graph.set("B", ["D"]);
  graph.set("C", ["D"]);
  graph.set("D", []);

  console.log(graph);
}
// usingMap();

//

// 1. Adjacency Matrix

function AdjacencyMatrix() {
  const graph = [
    [0, 1, 1, 0], // A
    [0, 0, 0, 1], // B
    [0, 0, 0, 1], // C
    [0, 0, 0, 0], // D
  ];
  // console.log(graph);
  // console.log(graph[0][1]); // edge A -> B
}
AdjacencyMatrix();

//
function checkNeighour() {
  const graph = [
    [0, 1, 1, 0], // A
    [0, 0, 0, 1], // B
    [0, 0, 0, 1], // C
    [0, 0, 0, 0], // D
  ];

  const vertices = ["A", "B", "C", "D"];

  // Find all neighbors of A
  const neighborsOfA = [];
  for (let j = 0; j < graph[0].length; j++) {
    if (graph[0][j] === 1) {
      neighborsOfA.push(vertices[j]);
    }
  }

  console.log(neighborsOfA); // ["B", "C"]
}
checkNeighour();
