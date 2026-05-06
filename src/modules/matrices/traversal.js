/**
 * Traversal methods
 * I'm using only square matrix for a while,
 * ...since its the more important one for algebra
 
 * Row-Wise
 * From left to right, column by column (traditional traversal).
 */
function rowWise(matrix, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`Matrix at(${i},${j}) -> ${matrix[i][j]} `);
    }
  }
}

/**
 * Column-Wise
 * From top to bottom, row by row.
 */
function columnWise(matrix, n) {
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      console.log(`Matrix at(${i},${j}) -> ${matrix[i][j]} `);
    }
  }
}

/**
 * Zig-Zag
 * From left to right and right to left foreach row.
 */
function zigZag(matrix, n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < n; j++) {
        console.log(`Matrix at(${i},${j}) -> ${matrix[i][j]} `);
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        console.log(`Matrix at(${i},${j}) -> ${matrix[i][j]} `);
      }
    }
  }
}

/**
 * Snake-Traversal
 * From top to bottom and bottom to top, foreach column.
 */
function snakeTraversal(matrix, n) {
  for (let j = 0; j < n; j++) {
    if (j % 2 == 0) {
      for (let i = 0; i < n; i++) {
        console.log(`Matrix at(${i},${j}) -> ${matrix[i][j]} `);
      }
    } else {
      for (let i = n - 1; i >= 0; i--) {
        console.log(`Matrix at(${i},${j}) -> ${matrix[i][j]} `);
      }
    }
  }
}

/**
 * Spiral-Traversal
 */
function spiralTraversal(matrix, n) {
  let top = 0,
    left = 0,
    bottom = n - 1,
    right = n - 1;
  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) {
      console.log(`Matrix at(${top},${j}) -> ${matrix[top][j]} `);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      console.log(`Matrix at(${i},${right}) -> ${matrix[i][right]} `);
    }
    right--;

    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        console.log(`Matrix at(${bottom},${j}) -> ${matrix[bottom][j]} `);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        console.log(`Matrix at(${i},${left}) -> ${matrix[i][left]} `);
      }
      left++;
    }
  }
}

/**
 * Z-Curve (Morton Order) Traversal
 * Uses bitwise interleaving to map 1D sequence into 2D spatial coordinates.
 * Excellent for CPU cache locality in large math simulations.
 */
function zCurveTraversal(matrix, n) {
  // Finds the bounding power of 2 (e.g., if n=3, p=4)
  let p = 1;
  while (p < n) p *= 2;
  const maxCells = p * p;

  for (let d = 0; d < maxCells; d++) {
    let x = 0;
    let y = 0;

    // Decode Morton Code: extract even bits for x, odd bits for y
    for (let i = 0; i < 16; i++) {
      x |= (d & (1 << (2 * i))) >> i;
      y |= (d & (1 << (2 * i + 1))) >> (i + 1);
    }

    // Only access if the decoded coordinate is within the actual NxN matrix
    if (y < n && x < n) {
      console.log(`Matrix at(${y},${x}) -> ${matrix[y][x]} `);
    }
  }
}

/**
 * Radial Expansion Traversal
 * Expands outwards from the mathematical center of the matrix.
 * Implemented by sorting coordinates based on Euclidean distance from the center.
 */
function radialTraversal(matrix, n) {
  const center = (n - 1) / 2;
  const coords = [];

  // Map all coordinates and calculate their squared distance from the center
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const dist = Math.pow(i - center, 2) + Math.pow(j - center, 2);
      coords.push({ i, j, dist });
    }
  }

  // Sort by distance (closest to center first)
  coords.sort((a, b) => a.dist - b.dist);

  // Traverse in radial outward order
  for (const cell of coords) {
    console.log(`Matrix at(${cell.i},${cell.j}) -> ${matrix[cell.i][cell.j]} `);
  }
}

export {
  rowWise,
  columnWise,
  zigZag,
  snakeTraversal,
  spiralTraversal,
  zCurveTraversal,
  radialTraversal,
};
