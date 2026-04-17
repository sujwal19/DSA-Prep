let graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

function dfs(node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(neighbor, visited);
  }
}

dfs("A");
console.log("......");
//
function dfsStack(start) {
  let stack = [start];
  let visited = new Set();

  while (stack.length) {
    let node = stack.pop();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (let neighbor of graph[node]) {
        stack.push(neighbor);
      }
    }
  }
}
dfsStack("A");
console.log("......");

function bfs(start) {
  let queue = [start];
  let visited = new Set();

  visited.add(start);

  while (queue.length) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
bfs("A");
