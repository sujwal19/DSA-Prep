const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

function addVertex(graph, vertex) {
  if (!graph[vertex]) {
    graph[vertex] = [];
  }
}

// Nodes → (Vertices) → points (people, cities, computers)
// Edges → connections between them → (friendships, roads, cables)

function addEdge(graph, v1, v2) {
  graph[v1].push(v2);
  graph[v2].push(v1);
}

addVertex(graph, "E");
addEdge(graph, "A", "E");
// console.log(graph);
console.log("........");
//

function printGraph(graph) {
  for (let vertex in graph) {
    console.log(vertex + " -> " + graph[vertex].join(", "));
  }
}

// printGraph(graph);

//

function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      queue.push(...graph[node]);
    }
  }
}

// bfs(graph, "B");
console.log("......");

//

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
// dfs(graph, "C");

//

function updateEdge(graph, v1, oldV, newV) {
  let index = graph[v1].indexOf(oldV);
  if (index !== -1) {
    graph[v1][index] = newV;
  }
}

updateEdge(graph, "A", "E", "G");
console.log(graph);
console.log("...");

//

function removeEdge(graph, v1, v2) {
  graph[v1] = graph[v1].filter((v) => v !== v2);
  graph[v2] = graph[v2].filter((v) => v !== v1);
}

// removeEdge(graph, "A", "B");
// console.log(graph);

//
function removeVertex(graph, vertex) {
  for (let neighbor of graph[vertex]) {
    removeEdge(graph, vertex, neighbor);
  }
  delete graph[vertex];
}

removeVertex(graph, "C");
printGraph(graph);
