import { Worker } from "worker_threads";

async function runBuildMatrixWorker(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./hardTask.js", { workerData: n });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

async function main() {
  console.debug(`Parallelism_Thread_Main started at...${new Date().toLocaleTimeString()}`);
  runBuildMatrixWorker(7000);
  console.debug(`Parallelism_Thread_Main finished at...${new Date().toLocaleTimeString()}`);
}

main();
