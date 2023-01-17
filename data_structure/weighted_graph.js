class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  show() {
    return this.values;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return false;
    }

    const foundVertex2 = this.adjacencyList[vertex1].findIndex(
      (vertex) => vertex.node === vertex2
    );

    if (foundVertex2 > -1) {
      this.adjacencyList[vertex1].splice(foundVertex2, 1, {
        node: vertex2,
        weight,
      });
    } else {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    }

    const foundVertex1 = this.adjacencyList[vertex2].findIndex(
      (vertex) => vertex.node === vertex1
    );

    if (foundVertex1 > -1) {
      this.adjacencyList[vertex2].splice(foundVertex1, 1, {
        node: vertex1,
        weight,
      });
    } else {
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    return true;
  }

  show() {
    return this.adjacencyList;
  }

  Dijkstra({ start, finish }) {
    const nodes = new PriorityQueue();
    const previous = {};
    const distances = {};
    const path = [];
    let smallest;

    const vertexs = Object.keys(this.adjacencyList);

    for (let vertex of vertexs) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }

    while (nodes.values.length) {
      console.log(nodes.values);
      smallest = nodes.dequeue().val;
      // console.log("smallest ::: ", smallest);
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        path.push(smallest);
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of Object.values(this.adjacencyList[smallest])) {
          let candidate = distances[smallest] + neighbor.weight;

          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;

            nodes.enqueue(neighbor.node, candidate);
          }
        }
      }

      // console.log(smallest);
    }

    return path.reverse();
  }
}

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
// console.log(wg.show());
console.log(wg.Dijkstra({ start: "A", finish: "E" }));

// const q = new PriorityQueue();
// q.enqueue("A", 1);
// q.enqueue("B", 2);
// q.enqueue("C", 4);
// q.enqueue("D", 3);
