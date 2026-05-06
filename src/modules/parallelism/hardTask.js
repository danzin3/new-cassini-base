import { parentPort, workerData } from "worker_threads";

const kanji = [`火`, `水`, `山`, `川`, `星`, `空`, `俺`, `日`, `本`, `語`];

function buildKanjiMatrix(n) {
  console.time("buildMatrixTime");
  const finalMatrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(kanji[Math.floor(Math.random() * 10)]);
    }
    finalMatrix.push(row);
  }
  console.timeEnd("buildMatrixTime");
  return finalMatrix;
}

parentPort.postMessage(buildKanjiMatrix(workerData));
