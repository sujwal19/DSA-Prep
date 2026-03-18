class Graph {
  constructor() {
    this.adjList = {};
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  // Add an edge (undirected)
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  // Remove an edge
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
  }

  // Remove a vertex
  removeVertex(vertex) {
    if (!this.adjList[vertex]) return;

    while (this.adjList[vertex].length) {
      const neighbor = this.adjList[vertex].pop();
      this.removeEdge(vertex, neighbor);
    }
    delete this.adjList[vertex];
  }

  // BFS Traversal
  bfs(start) {
    if (!this.adjList[start]) return [];
    const queue = [start];
    const visited = {};
    const result = [];

    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();
      result.push(current);

      for (const neighbor of this.adjList[current]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  dfs(start, visited = {}, result = []) {
    if (!this.adjList[start]) return [];
    result.push(start);
    visited[start] = true;

    for (const neighbor of this.adjList[start]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited, result);
      }
    }
    return result;
  }

  dfsIterative(start) {
    if (!this.adjList[start]) return [];
    const stack = [start];
    const visited = new Set([start]);
    const result = [];

    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node);

      for (const neighbor of this.adjList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
}
const g = new Graph();

// Add edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// Run BFS
// console.log(g.bfs("A"));
console.log(g.bfsO("A"));
console.log();
console.log(g.dfs("A"));
console.log();
console.log(g.dfsIterative("A"));

//

function AdjacencyMatrix() {
  //
  class GraphMatrix {
    constructor(size) {
      this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(i, j) {
      this.matrix[i][j] = 1;
      this.matrix[j][i] = 1; // remove for directed graph
    }
  }

  const g = new GraphMatrix(3);

  g.addEdge(0, 1);
  g.addEdge(0, 2);

  console.log(g.matrix);
}
// AdjacencyMatrix();
