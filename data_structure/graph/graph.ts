class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
    }
  }

  addEdge(val1, val2) {
    if (!this.adjacencyList[val1]) this.adjacencyList[val1] = [];
    if (!this.adjacencyList[val2]) this.adjacencyList[val2] = [];

    if (!this.adjacencyList[val1].includes(val2)) {
      this.adjacencyList[val1].push(val2);
    }

    if (!this.adjacencyList[val2].includes(val1)) {
      this.adjacencyList[val2].push(val1);
    }
  }

  removeEdge(val1, val2) {
    if (!this.adjacencyList[val1] || !this.adjacencyList[val2]) return undefined;

    this.adjacencyList[val1] = this.adjacencyList[val1].filter((value) => value !== val2);

    this.adjacencyList[val2] = this.adjacencyList[val2].filter((value) => value !== val1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length !== 0) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;

          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = { [start]: true };
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// graph.removeVertex("five");
// graph.removeEdge("four", "five");
// console.log(graph.depthFirstRecursive("A"));
console.log(graph);
console.log(graph.depthFirstIterative('A'));
console.log(graph.breadthFirst('A'));
