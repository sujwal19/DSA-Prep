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
    let result = [];
    let visited = {};
    let queue = [start];

    visited[start] = true;

    while (queue.length) {
      let current = queue.shift();
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
    const visited = {};
    visited[start] = true;
    const result = [];

    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node);

      for (const neighbor of this.adjList[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
    return result;
  }

  isCycleUndirDFS(start, parent, visited) {
    visited[start] = true;

    for (const neighbor of this.adjList[start]) {
      if (!visited[neighbor]) {
        if (this.isCycleUndirDFS(neighbor, start, visited)) {
          return true;
        }
      } else if (neighbor != parent) {
        return true;
      }
    }
    return false;
  }

  isCycle() {
    const visited = {};

    for (const node in this.adjList) {
      if (!visited[node]) {
        if (this.isCycleUndirDFS(node, -1, visited)) {
          return true;
        }
      }
    }
    return false;
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
console.log(g.bfs("A"));
console.log();
console.log(g.dfs("A"));
console.log();
console.log(g.dfsIterative("A"));
console.log(g.isCycle());

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
