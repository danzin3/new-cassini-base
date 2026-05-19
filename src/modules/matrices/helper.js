/**
 * Matrix building process and Operations only.
 */

function buildSquareMatrix(n, maxSizeElement) {
  const finalMatrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(Math.floor(Math.random() * maxSizeElement));
    }
    finalMatrix.push(row);
  }
  return finalMatrix;
}

function det2x2Matrix(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function det3x3Matrix(matrix) {
  //Sarrus shortcut method
  return (
    matrix[0][0] * matrix[1][1] * matrix[2][2] +
    matrix[0][1] * matrix[1][2] * matrix[2][0] +
    matrix[0][2] * matrix[1][0] * matrix[2][1] -
    (matrix[0][2] * matrix[1][1] * matrix[2][0] +
      matrix[0][0] * matrix[1][2] * matrix[2][1] +
      matrix[0][1] * matrix[1][0] * matrix[2][2])
  );
}

function detGauss(matrix, n) {
  const m = matrix.map((row) => [...row]); // copy
  let det = 1;
  let sign = 1;

  for (let i = 0; i < n; i++) {
    // Pivotamento parcial
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(m[k][i]) > Math.abs(m[maxRow][i])) {
        maxRow = k;
      }
    }

    if (m[maxRow][i] === 0) return 0;

    // Troca de linhas
    if (i !== maxRow) {
      [m[i], m[maxRow]] = [m[maxRow], m[i]];
      sign *= -1;
    }

    // Eliminação
    for (let k = i + 1; k < n; k++) {
      const factor = m[k][i] / m[i][i];
      for (let j = i; j < n; j++) {
        m[k][j] -= factor * m[i][j];
      }
    }

    det *= m[i][i];
  }

  return det * sign;
}

function detLUP(matrix, n) {
  const A = matrix.map((row) => [...row]); // copy
  const P = Array.from({ length: n }, (_, i) => i); // permutation
  let swaps = 0;

  for (let i = 0; i < n; i++) {
    // Pivotamento
    let max = Math.abs(A[i][i]);
    let pivot = i;

    for (let k = i + 1; k < n; k++) {
      if (Math.abs(A[k][i]) > max) {
        max = Math.abs(A[k][i]);
        pivot = k;
      }
    }

    if (max === 0) return 0; // matriz singular

    // Switch of lines
    if (pivot !== i) {
      [A[i], A[pivot]] = [A[pivot], A[i]];
      [P[i], P[pivot]] = [P[pivot], P[i]];
      swaps++;
    }

    // Elimination (LU in-place)
    for (let j = i + 1; j < n; j++) {
      A[j][i] /= A[i][i];
      for (let k = i + 1; k < n; k++) {
        A[j][k] -= A[j][i] * A[i][k];
      }
    }
  }

  // Determinante = diagonal product * (-1)^swaps
  let det = swaps % 2 === 0 ? 1 : -1;

  for (let i = 0; i < n; i++) {
    det *= A[i][i];
  }

  return det;
}

export { buildSquareMatrix, det2x2Matrix, det3x3Matrix, detGauss, detLUP };
