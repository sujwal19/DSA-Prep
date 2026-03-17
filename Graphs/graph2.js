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
    while (this.adjList[vertex].length) {
      const neighbor = this.adjList[vertex].pop();
      this.removeEdge(vertex, neighbor);
    }
    delete this.adjList[vertex];
  }

  // BFS Traversal
  bfs(start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (queue.length) {
      const current = queue.shift();
      result.push(current);

      for (const neighbor of this.adjList[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
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
console.log(g.bfs("A"));
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
