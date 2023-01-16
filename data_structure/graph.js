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
    if (!this.adjacencyList[val1] || !this.adjacencyList[val2])
      return undefined;

    this.adjacencyList[val1] = this.adjacencyList[val1].filter(
      (value) => value !== val2
    );

    this.adjacencyList[val2] = this.adjacencyList[val2].filter(
      (value) => value !== val1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("first");
graph.addVertex("second");
graph.addEdge("three", "four");
graph.addEdge("four", "three");
graph.addEdge("four", "five");
graph.removeVertex("five");
// graph.removeEdge("four", "five");
console.log("graph ::::: ", graph);
