interface WeightedGraph<T> {
  addVertex(vertex: T): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}

class Vertex {
  name: string;

  constructor(vertexName: string) {
    this.name = vertexName;
  }
}

const vertex1 = new Vertex("1");
const vertex2 = new Vertex("2");
const vertex3 = new Vertex("3");
const vertex4 = new Vertex("4");
const vertex5 = new Vertex("5");

const vertices = [vertex1, vertex2, vertex3, vertex4, vertex5];

class Edge {
  constructor(public from: Vertex, public to: Vertex, public weight: number) {}
}

const edges = [
  new Edge(vertex1, vertex4, 3),
  new Edge(vertex1, vertex2, 5),
  new Edge(vertex1, vertex3, 4),
  new Edge(vertex2, vertex4, 6),
  new Edge(vertex2, vertex3, 5),
];

class Graph implements WeightedGraph<Vertex> {
  // An adjacency list to hold our graph data
  private _adjList: Vertex[];
  private _edges: Edge[];

  constructor() {
    this._adjList = [];
  }

  addVertex(newVertex: Vertex) {
    if (this._adjList.find((vertex) => vertex.name === newVertex.name)) {
      return;
    }

    this._adjList.push(newVertex);
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number) {
    this._edges.push(new Edge(vertex1, vertex4, weight));
  }
}

const graph = new Graph();

vertices.forEach((vertex) => graph.addVertex(vertex));
edges.forEach((edge) => graph.addEdge(edge.from, edge.to, edge.weight));
