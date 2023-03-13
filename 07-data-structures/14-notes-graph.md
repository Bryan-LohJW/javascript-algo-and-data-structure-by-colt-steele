**Graphs**

What is a graph?

-   A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered paits for a directed graph

Uses for graphs

-   social network
-   location/mapping
-   routing algorithms
-   visual hierarchy
-   file system optimizations
-   everywhere

Terms

-   Vertex (node)
-   Edge (connection between nodes)
-   weighted/unweighted (values assigned to distances between vertices)
-   directed/undirected (directions assigned to distance between vertices)

Types of graphs

-   tree
-   -   trees are graphs, but theres only one path from one node to another
-   undirected graph (no direction on edges, meaning they are two way)
-   directed graph (have direction on edges, can be one way or two ways)
-   weighted graph (where edges have values, information about the connection)

Representing a graph

-   adjacency matrix
-   -   using nested arrays to represent the connections
-   -   add vertex O(v^2)
-   -   add edge O(1)
-   -   remove vertex O(V^2)
-   -   remove edge O(1)
-   -   query O(1)
-   -   storage O(V^2)
-   -   takes up more space (in sparce graphs)
-   -   slower to iterate over all edges
-   -   faster to lookup specific edge

-   adjacency list
-   -   using a list to store the edges
-   -   add vertex O(1)
-   -   add edge O(1)
-   -   remove vertex O(V+E)
-   -   remove edge O(E)
-   -   query O(V+E)
-   -   storage O(V+E)
-   -   can take up less spavce (in sparce graphs)
-   -   faster to iterate over all edges
-   -   can be slower to lookup specific edge

Graph Class

```js
class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => {
				v !== vertex2;
			}
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => {
				v !== vertex1;
			}
		);
	}
	removeVertex(vertex) {
		// for (let link of this.adjacencyList[vertex]) {
		// 	this.removeEdge(vertex, link);
		// }
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
}
```

Adding a vertex

```
write a method called addVertex which accepts a name of a vertex
it should add a key to the adjacency list with the name of ther vertex and set its value to be an empty array
```

Adding an edge

```
this function should accept two vertices, we call them vertex1 and vertex2
the function should find in the adhacency list the key of vertex1 and push vertex2 to the array
the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
```

Removing an edge

```
this function should accept two vertices, we'll call them vertex1 and vertex2
the function should reassign the key of vertex1 to be an array that does not contain vertex2
the function should reassign the key of vertex2 to be an array that does not contain vertex1
```

Remove a vertex

```
the function should accept a vertex to remove
the function should loop as long as there are any other vertices in the adjacency list for that vertex
inside of the loop, call our removeEdge function with the vertex we are remove and any values in the adjacency list for that vertex
delete the key in the adjacency list for that vertex
```
