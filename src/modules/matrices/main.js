import {
  buildSquareMatrix,
  det2x2Matrix,
  det3x3Matrix,
  detGauss,
  detLUP,
} from "./helper.js";
import { zCurveTraversal, radialTraversal } from "./traversal.js";

async function main() {
  console.time("⏱ Matrices_Thread_Main");

  const mat = buildSquareMatrix(3, 12);
  //console.table(mat);
  console.log("Determinante -> ", det2x2Matrix(mat));
  console.log("Determinante -> ", det3x3Matrix(mat));
  console.log("Determinante -> ", detGauss(mat, 3));
  console.log("Determinante -> ", detLUP(mat, 3));
  //zCurveTraversal(mat, 3);
  //radialTraversal(mat, 3);

  console.timeEnd("⏱ Matrices_Thread_Main");
}

main();
