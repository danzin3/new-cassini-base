/**
 * Hello
 * It's hard for everyone!
 */

export class GraphMatrix {
  graphSize = 0;
  adjMatrix = [];
  constructor(n) {
    this.graphSize = n;
    for (let i = 0; i < n; i++) {
      const columns = [];
      for (let j = 0; j < n; j++) {
        columns.push(0.0);
      }
      this.adjMatrix.push(columns);
    }
  }

  setWeight(v1, v2, value) {
    this.adjMatrix[v1][v2] = value;
    this.adjMatrix[v2][v1] = value;
  }

  getWeight(v1, v2) {
    return this.adjMatrix[v1][v2];
  }

  hasAdj(v) {
    return this.adjMatrix[v].some((x) => x !== -1);
  }

  getNeighbors(v) {
    const neighbors = [];
    this.adjMatrix[v].forEach((weight, index) => {
      if (weight !== -1) {
        neighbors.push({
          neighbor: index,
          weight,
        });
      }
    });
    return neighbors;
  }
}
